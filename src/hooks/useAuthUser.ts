import { setIsAuthedUser } from '../store/slices/userSlice';
import { useAppDispatch } from '../store/store';

export const useAuthUser = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('accessToken');

  if (token) {
    dispatch(setIsAuthedUser(true));
  }
};
