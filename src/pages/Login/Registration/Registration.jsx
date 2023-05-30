import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import 'animate.css';


const Registration = () => {
  const { createUser, userProfileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        userProfileUpdate(data.name, data.photoURL)
          .then(() => { })
          .catch(error => console.error(error));
        Swal.fire({
          title: 'User created Successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        reset();
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <Helmet><title>Bistro Boss | Registration</title></Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 mt-12">{/* <img src={login} alt="" /> */}</div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <h3 className="text-center text-3xl">Sign Up</h3>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    placeholder="Enter your name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      You have to put your name
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    {...register('photoURL', { required: true })}
                    placeholder="Enter your photo link"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-500 text-sm">
                      You have to put your photoURL
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register('email', { required: true })}
                    placeholder="Enter your email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      You have to put your email
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                      // pattern:
                        // /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&? "])$/
                    })}
                    placeholder="Enter your password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === 'required' && (
                    <span className="text-red-500 text-sm">
                      Password is required
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="text-red-500 text-sm">
                      Your password must be 6 characters
                    </span>
                  )}
                  {errors.password?.type === 'maxLength' && (
                    <span className="text-red-500 text-sm">
                      Your password must be less than 12 characters
                    </span>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <span className="text-red-500 text-sm">
                      Your password must be one uppercase,one lowercase,one
                      digit and one special character
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#FF3811] border-none">
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="text-center mt-2">
                Already have an account?{' '}
                <span className="text-[#FF3811]">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;