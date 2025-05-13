const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product"); // Same as in server.js

const BASE_URL =
  process.env.BASE_URL || "https://sanchita-enterprises-ecommerce.onrender.com";

const fixImageUrls = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const products = await Product.find({ image: /localhost/ });

    for (const product of products) {
      product.image = product.image.replace("http://localhost:5000", BASE_URL);

      if (product.gallery && product.gallery.length > 0) {
        product.gallery = product.gallery.map((url) =>
          url.replace("http://localhost:5000", BASE_URL)
        );
      }

      await product.save();
      console.log(`🔄 Updated: ${product.title}`);
    }

    console.log("🎉 All outdated image URLs updated!");
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

fixImageUrls();
