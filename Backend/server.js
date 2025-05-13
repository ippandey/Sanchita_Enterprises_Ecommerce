const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Cart = require("./models/Cart");
const Order = require("./models/Order");
const Razorpay = require("razorpay");

const app = express();

// Middleware: Increase request size limits
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
const corsOptions = {
  origin: ["https://sanchita-enterprises.netlify.app/"], // Your frontend URL
  methods: ["GET", "POST", "DELETE", "PUT"],
};
app.use(cors(corsOptions));

// Serve static files (important for images to load correctly)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const reviewSchema = new mongoose.Schema({
  name: String,
  rating: { type: Number, required: true },
  review: String,
  createdAt: { type: Date, default: Date.now },
});

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: [
        "Dye",
        "Solvent",
        "Reagent",
        "Alkaline Agent",
        "Bleaching Agent",
        "Finishing Agent",
        "Neutralizing Agent",
        "Reducing Agent",
        "Bio-polishing Agent",
        "Lubricant",
        "Cleaning Agent",
        "Additives",
        "Brightening Agent",
        "Mordant",
        "Fixative",
        "Softening Agent",
        "Coating Agent",
      ],
    },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    description: { type: String, required: true, trim: true },
    sizes: { type: [String], enum: ["Small", "Medium", "Large"] }, // Modify as needed
    image: { type: String, required: true },
    gallery: { type: [String], default: [] },
    reviews: [reviewSchema],
    averageRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

productSchema.methods.calculateAverageRating = function () {
  const sum = this.reviews.reduce((acc, curr) => acc + curr.rating, 0);
  this.averageRating = this.reviews.length ? sum / this.reviews.length : 0;
  return this.save();
};
const Product = mongoose.model("Product", productSchema);

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store images in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage }).fields([
  { name: "imageFile", maxCount: 1 }, // Single main image
  { name: "galleryFiles", maxCount: 5 }, // Multiple gallery images
]);

// Product Upload Route
app.post("/api/products", upload, async (req, res) => {
  try {
    const { title, category, price, originalPrice, stock, description, sizes } =
      req.body;

    const baseUrl =
      process.env.BASE_URL || `${req.protocol}://${req.get("host")}`;

    // Construct full image URLs
    const image = req.files["imageFile"]
      ? `${baseUrl}/uploads/${req.files["imageFile"][0].filename}`
      : "";

    const gallery = req.files["galleryFiles"]
      ? req.files["galleryFiles"].map(
          (file) => `${baseUrl}/uploads/${file.filename}`
        )
      : [];

    const newProduct = new Product({
      title,
      category,
      price,
      originalPrice,
      stock,
      description,
      sizes: sizes.split(","),
      image,
      gallery,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "✅ Product added successfully!", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error });
  }
});

// Fetch All Products Route
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error });
  }
});

// Fetch Single Product Route
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "❌ Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error });
  }
});

// Delete product route
app.delete("/api/products/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ message: "Product deleted successfully" });
});

// Review Route
app.post("/api/products/:id/review", async (req, res) => {
  try {
    const { name, rating, review } = req.body;

    if (!name || !rating) {
      return res.status(400).json({ message: "Name and rating required" });
    }

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.reviews.push({ name, rating, review });
    await product.calculateAverageRating();

    res.status(201).json({ message: "Review added", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Cart Routes
app.post("/api/cart/add", async (req, res) => {
  try {
    console.log("Add to cart request", req.body);
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({ error: "Invalid request" });
    }

    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new Cart({ userId, productId, quantity });
    }

    await cartItem.save();
    res.json({ success: true, cartItem });
  } catch (error) {
    console.error("Error adding to cart", error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.get("/api/cart/:userId", async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId }).populate(
      "productId"
    );
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

app.delete("/api/cart/remove/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Signup endpoint
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, password: hashedPassword });
    await user.save();
    res
      .status(201)
      .json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "200d",
    });
    res.status(200).json({
      token,
      userId: user._id,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Payment Route
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/api/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    const payment_capture = 1;
    const currency = "INR";

    const options = { amount, currency, payment_capture };
    const response = await razorpay.orders.create(options);
    res.json(response);
  } catch (error) {
    console.error("Payment Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Payment Success Route
app.post("/api/payment/success", async (req, res) => {
  const { userId, items, totalAmout, paymentId } = req.body;

  try {
    const newOrder = new Order({
      userId,
      items,
      totalAmout,
      status: "Processing",
      paymentId,
    });
    await newOrder.save();
    await Cart.deleteMany({ userId });
    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
    res.json({ success: true });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ error: "Failed to clear cart" });
  }
});

// Create a new order
app.post("/api/orders", async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;
    const newOrder = new Order({ userId, items, totalAmount });
    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Fetch order history for a user
app.get("/api/orders/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate(
      "items.productId"
    );
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Dummy Order Data
const dummyOrders = {
  12345: "Order Received",
  54321: "Dispatched",
  11111: "In Process",
  22222: "Delivered",
};

// Track Order Route
app.get("/api/orders/track/:orderId", (req, res) => {
  const { orderId } = req.params;
  const status = dummyOrders[orderId];

  if (status) {
    res.json({ status });
  } else {
    res.status(404).json({ status: "Order not found" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
