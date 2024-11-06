import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';

const FoodCard = ({ item }) => {
  const { name, price, recipe, image } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const handleAddToCart = (food) => {
    if (user && user?.email) {
      //TO DO ::send item to the database
      const cartItem = {
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post('/carts', cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${name} is saved to cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: 'You are not login',
        text: 'Firstly login to add to the cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes,Login',
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page
          // Swal.fire({
          //   title: 'Deleted!',
          //   text: 'Your file has been deleted.',
          //   icon: 'success',
          // });
          navigate('/login', { state: { from: location } });
        }
      });
    }
    console.log(food, user.email);
  };
  return (
    <div className="card  bg-base-100 w-80 card-compact shadow-xl hover:opacity-30 translate-all duration-300">
      <>
        <img
          src={image}
          alt="Food"
        />
      </>
      <p className="text-orange-600 bg-slate-800 absolute mt-0 mr-4 text-2xl p-3 border-lg font-bold">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
