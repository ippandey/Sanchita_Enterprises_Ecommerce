import { useState } from "react";
import { addProduct } from "../../services/api";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    originalPrice: "",
    stock: "",
    description: "",
    sizes: [],
    imageFile: null, // Store main image file
    galleryFiles: [],
    gallery: [], // Store gallery images
  });

  const sizesOptions = ["Small", "Medium", "Large"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct((prev) => ({
        ...prev,
        imageFile: file, // Store file for API
      }));
    }
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct((prev) => ({
      ...prev,
      galleryFiles: [...prev.galleryFiles, ...files], // Store files
    }));
  };

  const handleSizesChange = (size) => {
    setProduct((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  // Hook for redirection
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        title: product.title,
        category: product.category,
        price: product.price,
        originalPrice: product.originalPrice,
        stock: product.stock,
        description: product.description,
        sizes: product.sizes.join(","),
        imageFile: product.imageFile,
        galleryFiles: product.galleryFiles,
      };

      await addProduct(formData);
      // alert("Product added successfully!");
      navigate("/listproduct"); // Redirect to homepage after adding product
    } catch (error) {
      alert("Error adding product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 p-5 border rounded-lg shadow font-work"
    >
      <h2 className="text-2xl font-medium font-work mb-4">Add Product</h2>
      <input
        name="title"
        placeholder="Title"
        value={product.title}
        onChange={handleChange}
        className="border-2 p-2 mb-3 w-2/3"
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
        className="border-2 p-2 mb-5 w-2/3"
        required
      />

      {/* Main Image Upload */}
      <label className="block font-medium font-work mb-1">Main Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleMainImageUpload}
        className="border-2 p-2 mb-5 w-2/3
        "
      />
      {product.image && (
        <img
          src={product.image}
          alt="Main Preview"
          className="w-32 h-32 object-cover mt-2 mb-5"
        />
      )}

      {/* Gallery Images Upload */}
      <label className="block font-medium font-work mb-1 mt-2">
        Gallery Images:
      </label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleGalleryUpload}
        className="border-2 p-2 mb-3 w-2/3"
      />
      <div className="flex gap-2 mt-2">
        {product.gallery.slice(1).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-20 h-20 object-cover mb-5"
          />
        ))}
      </div>

      <input
        name="price"
        placeholder="Price"
        type="number"
        value={product.price}
        onChange={handleChange}
        className="border-2 p-2 mb-3 w-2/3"
        required
      />
      <input
        name="originalPrice"
        placeholder="Original Price"
        type="number"
        value={product.originalPrice}
        onChange={handleChange}
        className="border-2 p-2 mb-3 w-2/3"
      />
      <input
        name="stock"
        placeholder="Stock"
        type="number"
        value={product.stock}
        onChange={handleChange}
        className="border-2 p-2 mb-3 w-2/3"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        className="border-2 p-2 mb-3 w-2/3"
        required
      />

      {/* Sizes Selection (Checkboxes) */}
      <div className="mb-10">
        <label className="font-medium font-work">Sizes:</label>
        <div className="flex gap-3 mt-2">
          {sizesOptions.map((size) => (
            <label key={size} className="flex items-center">
              <input
                type="checkbox"
                value={size}
                checked={product.sizes.includes(size)}
                onChange={() => handleSizesChange(size)}
                className="mr-1"
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="text-[#202025] border-[1px] border-[#202025] rounded-md hover:bg-[#202025] hover:text-white px-4 py-2 w-2/3"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
