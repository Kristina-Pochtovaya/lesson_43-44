import { Route, Routes } from 'react-router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Main } from './pages/main/main';
import { Product } from './pages/product/product';
import { Registration } from './pages/registration/registration';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Registration />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
