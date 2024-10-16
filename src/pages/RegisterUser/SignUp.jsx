import React from "react";
import { useForm } from "react-hook-form";
import signup from "../../assets/others/authentication1.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("name"));
  return (
    <>
      <Helmet>
        <title>Cake With You | Sign Up </title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={signup} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="name"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
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
                  {...register("password", {
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
                className="btn btn-primary text-lg"
                type="Submit"
                value="Signup"
              />
            </form>
            <p className="text-center mb-2">
              Have an account?{" "}
              <Link to="/login">
                <span className="text-green-500">Login</span>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
