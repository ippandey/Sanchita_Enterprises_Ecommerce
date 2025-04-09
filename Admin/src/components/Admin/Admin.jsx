import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ListProduct from "../ListProduct/ListProduct";
import AddProduct from "../AddProduct/AddProduct";
import Sidebar from "../Sidebar/Sidebar";
import { getProducts } from "../../services/api";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products once when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    navigate("/listproduct"); // Redirect to product list after adding
  };

  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route
          path="/addproduct"
          element={<AddProduct onAdd={handleAddProduct} />}
        />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
