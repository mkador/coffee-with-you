import React, { useContext, useEffect, useState } from 'react';
import login from '../../assets/others/authentication.gif';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
const Login = () => {
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { user, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User Login Successfully !!',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
      console.log(user);
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img
            src={login}
            alt=""
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center">Login now!</h1>
          <form
            onSubmit={handleLogin}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <LoadCanvasTemplate />
                </span>
              </label>
              <input
                onBlur={handleValidateCaptcha}
                // ref={captchaRef}
                type="text"
                placeholder="Enter correct Captcha"
                name="captcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-3">
              <input
                disabled={disabled}
                className="btn btn-primary text-lg"
                type="Submit"
                value="login"
              />
            </div>
          </form>
          <p className="text-center ">
            New here?{' '}
            <Link to="/signup">
              {' '}
              <span className="text-green-500">Create an account</span>{' '}
            </Link>{' '}
          </p>
          <hr />
          <div className=" mx-auto py-2">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
