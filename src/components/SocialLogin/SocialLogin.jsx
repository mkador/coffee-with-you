import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.name?.displayName,
      };
      axiosPublic.post('/users', userInfo).then((res) => {
        console.log(res.data);
      });
    });
    navigate(from, { replace: true });
  };
  return (
    <div className="flex">
      <button
        onClick={handleGoogleSignIn}
        className="text-orange-600 btn btn-circle btn-outline mr-3"
      >
        <FaGoogle />
      </button>
      <button className="text-orange-600 btn btn-circle btn-outline">
        <FaFacebook />
      </button>
    </div>
  );
};

export default SocialLogin;
