import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import Loading from '../pages/Shared/Loading';

// const AdminRoute = (children) => {
//   const { user, loading } = useAuth;
//   const [isAdmin, isAdminLoading] = useAdmin;
//   const location = useLocation();
//   if (loading || isAdminLoading) {
//     return (
//       <div className="text-center mt-">
//         <Loading></Loading>
//       </div>
//     );
//   }
//   if (user && isAdmin) {
//     return children;
//   }
//   return (
//     <Navigate
//       to="/login"
//       state={{ from: location }}
//       replace
//     ></Navigate>
//   );
// };
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate
      to="/"
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default AdminRoute;
