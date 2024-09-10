import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from './SocialLogin';
import axios from 'axios'; // Import axios for API requests
import Navbar from '../../Home/Shared/NavbarNew';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard/userpage";

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, []);

    const handleLogin = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
  
      try {
          // Auth authenticate
          const result = await signInUser(email, password);
          const user = result.user;
  
          // Fetch JWT token
          const tokenResponse = await axios.post('http://localhost:5000/jwt', { email });
          const token = tokenResponse.data.token;
  
          // Fetch user role using the token
          const response = await axios.get(`http://localhost:5000/user/admin/${email}`, {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          });
          const userRole = response.data.admin ? 'admin' : 'user';
  
          Swal.fire({
              title: "LOGIN SUCCESSFULLY",
              showClass: {
                  popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                  `
              },
              hideClass: {
                  popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                  `
              }
          });
  
          // Redirect based on user role
          if (userRole === 'admin') {
              navigate("/dashboard/open-details", { replace: true });
          } else {
              navigate(from, { replace: true });
          }
      } catch (error) {
          console.error(error);
          Swal.fire({
              title: "Login Failed",
              text: error.message,
              icon: 'error',
              confirmButtonText: 'OK'
          });
      }
  };
  

    // const handleValidedCapcha = (e) => {
    //     const user_captcha_value = e.target.value;
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisable(false);
    //     } else {
    //         setDisable(true);
    //     }
    //     console.log(user_captcha_value);
    // };

    return (
        <div className=''>
            {/* <Navbar></Navbar> */}
            <div className="flex justify-center mt-20 items-center mx-auto ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-50">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Captcha</span>
                                </label>
                                <LoadCanvasTemplate />
                                <input type="text" onBlur={handleValidedCapcha} name="captcha" placeholder="type the above" className="input input-bordered" />
                            </div> */}
                            {/* <div className="form-control mt-6">
                                <button disabled={disable} className="btn bg-[#7E2553] text-white hover:bg-[#7E2553]">Login</button>
                            </div> */}
                            <div className="form-control mt-6">
                                <button   className="btn bg-yellow-600 text-white hover:bg-yellow-600">Login</button>
                            </div>
                            <div className="form-control mt-6">
                               
                                <a href="/register" className="text-center underline text-yellow-600 hover:text-yellow-600">Register </a>
                            </div>

                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
