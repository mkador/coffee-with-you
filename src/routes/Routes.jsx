import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu/Menu';
import OrderFood from '../pages/OrderFood/OrderFood';
import Login from '../pages/Login/Login';
import SignUp from '../pages/RegisterUser/SignUp';
import Secret from '../pages/Shared/Secret';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../layouts/Dashboard';
import Cart from '../pages/Dashboard/Cart/Cart';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddItems from '../pages/Dashboard/AddItems/AddItems';
import ManageItems from '../pages/Dashboard/ManageItems/ManageItems';
import AdminRoute from './AdminRoute';
import UpdateItem from '../pages/Dashboard/Updateitem/UpdateItem';
import Payment from '../pages/Dashboard/Payment/Payment';


export const route = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/orderFood/:category',
        element: <OrderFood />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/secret',
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart />,
      },
      {
        path: '/dashboard/payment',
        element: <Payment/>
      },
      //Admin routes
      {
        path: '/dashboard/users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/addItems',
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/updateItem/:id',
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: '/dashboard/manageItems',
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);
