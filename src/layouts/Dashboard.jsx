import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
} from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { IoListSharp } from 'react-icons/io5';
import { BsLifePreserver } from 'react-icons/bs';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                {' '}
                <NavLink to="/dashboard/userHome">
                  {' '}
                  <FaHome></FaHome> Admin Home
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/dashboard/addItems">
                  {' '}
                  <GiForkKnifeSpoon /> Add Items
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/dashboard/manageItems">
                  {' '}
                  <IoListSharp /> Manages Items
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/dashboard/bookings">
                  {' '}
                  <BsLifePreserver /> Manage Bookings
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/dashboard/users">
                  {' '}
                  <FaUsers /> All Users
                </NavLink>{' '}
              </li>
            </>
          ) : (
            <>
              <li>
                {' '}
                <NavLink to="/dashboard/userHome">
                  {' '}
                  <FaHome></FaHome> User Home
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/dashboard/reservation">
                  {' '}
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/dashboard/cart">
                  {' '}
                  <FaShoppingCart></FaShoppingCart> My cart
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/dashboard/review">
                  {' '}
                  <FaAd></FaAd> Review
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/dashboard/bookings">
                  {' '}
                  <FaList></FaList> Booking
                </NavLink>{' '}
              </li>
            </>
          )}
          <hr />
          {/* //shared nav links */}
          <li>
            <NavLink to="/">
              {' '}
              <FaHome></FaHome> Home
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to="/orderFood/contact">
              {' '}
              <MdContactMail /> Contact
            </NavLink>{' '}
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
