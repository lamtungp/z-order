import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/redux/hooks';

const AuthWrapper = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return <>{children}</>;
};

export default AuthWrapper;
