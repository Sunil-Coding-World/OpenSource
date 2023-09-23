import { useSelector } from 'react-redux';
import { selectLoggedInuser } from './authSlice';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInuser)
  // const user = useSelector(selectLoggedInuser);

  if (!user) {
    return <Navigate to="/login" push={true} />;
  }
  return children;
};

export default Protected;