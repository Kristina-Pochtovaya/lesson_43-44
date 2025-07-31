import { Navigate, Route, Routes } from 'react-router';
import { Products } from './pages/products/products';
import { Product } from './pages/product/product';
import { Login } from './pages/login/login';
import { Cart } from './pages/cart/cart';
import { ProtectedRoute } from './hocs/protected_route';
import { useAuthUser } from './hooks/useAuthUser';

export default function App() {
  useAuthUser();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
