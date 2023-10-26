import { useSelector } from 'react-redux';
import { selectLoggedInuser } from './authSlice';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInuser)

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default Protected;