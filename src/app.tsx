import { Navigate, Route, Routes } from 'react-router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Products } from './pages/products/products';
import { Product } from './pages/product/product';
import { Registration } from './pages/registration/registration';
import { Cart } from './pages/cart/cart';
import { ProtectedRoute } from './hocs/protected_route';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/login" element={<Registration />} />
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
      <Footer />
    </div>
  );
}

export default App;
