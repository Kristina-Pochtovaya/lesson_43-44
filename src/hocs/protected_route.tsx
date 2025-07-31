import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';
import { Navigate } from 'react-router';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export function ProtectedRoute({ children }) {
  const isAuth = useSelector(selectUser).isAuth;

  return isAuth ? (
    <>
      <Header />
      {children} <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );
}
