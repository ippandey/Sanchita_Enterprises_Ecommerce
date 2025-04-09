import { AuthProvider } from "./AuthContext";
import { DataProvider } from "./DataContext";
import { CartProvider } from "./CartContext";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <DataProvider>{children}</DataProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
