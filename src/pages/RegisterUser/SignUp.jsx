import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import signup from '../../assets/others/authentication1.png';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.data;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post('/users', userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log('user added to the database');
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Successfully Created ${data.name}`,
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/');
            }
          });
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <Helmet>
        <title>Cake With You | Sign Up </title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              src={signup}
              alt=""
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-xl font-bold text-center">Sign Up</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register('name')}
                  type="name"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register('photoURL')}
                  type="name"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register('email', { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="mt-1 text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="mt-1 text-red-600">
                    Password must be 6 characters
                  </span>
                )}
              </div>

              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p className="text-center">
              Have an account?{' '}
              <Link to="/login">
                <span className="text-green-500">Login</span>
              </Link>{' '}
            </p>
            <hr />
            <div className=" mx-auto py-2">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
