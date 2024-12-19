import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { Auth, Cart, Home, NotFound, Orders, Products } from "./screens";
import { PrivateRoute } from "./components";

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
              <Route path="/auth" element={<Auth />} />
              <Route path="/404" element={<NotFound />} />
              <Route
                path="/orders"
                element={
                  <PrivateRoute>
                    <Orders />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}
