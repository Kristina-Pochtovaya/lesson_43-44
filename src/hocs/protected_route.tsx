import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';
import { Navigate } from 'react-router';

export function ProtectedRoute({ children }) {
  const isAuth = useSelector(selectUser).isAuth && localStorage.getItem('auth');

  return isAuth ? children : <Navigate to="/login" />;
}
