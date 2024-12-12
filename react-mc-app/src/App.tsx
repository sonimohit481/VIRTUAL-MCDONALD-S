import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import { AuthProvider } from "./context/AuthContext";
import Orders from "./screens/Orders";
import OrderSuccess from "./screens/OrderSuccess";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./screens/Signup";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/orders"
                element={
                  <PrivateRoute>
                    <Orders />
                  </PrivateRoute>
                }
              />
              <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}
