import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/api";
import { useNavigate } from "react-router-dom";

const ListProduct = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProductList(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id); // Call API to delete from backend
      setProductList((prevList) =>
        prevList.filter((product) => product._id !== id)
      ); // Remove from state
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="m-5 p-5 rounded-lg shadow font-work border">
      <h2 className="text-2xl font-cormorant font-medium mb-5">Product List</h2>

      {productList.length === 0 ? (
        // Show message & Add Product button if no products exist
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            No products available. Start adding now!
          </p>
          <button
            onClick={() => navigate("/addproduct")}
            className="text-[#202025] border-[1px] border-[#202025] rounded-md hover:bg-[#202025] hover:text-white px-4 py-2 w-2/3"
          >
            Add Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {productList.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow p-4 flex flex-col items-center"
            >
              {/* Display Product Image */}
              {product.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-cover mb-2"
                />
              )}
              <h3 className="text-md font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-lg font-bold text-primaryBlack">
                ₹{product.price}{" "}
                <span className="line-through text-sm text-gray-600">
                  ₹{product.originalPrice}
                </span>
              </p>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>

              {/* Sizes */}
              <p className="text-sm mt-1">
                <span className="font-semibold">Sizes:</span>{" "}
                {product.sizes.length ? product.sizes.join(", ") : "N/A"}
              </p>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListProduct;
