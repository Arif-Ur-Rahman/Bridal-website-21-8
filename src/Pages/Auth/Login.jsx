import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
        toast.success('Successful Login');
      })
      .catch(error => {
        console.error(error);
        toast.error('Login error');  
      });
  };

    const handleGoogle =()=>{
         signInWithGoogle()
         .then(result=>{console.log(result.user)})
         .catch((error)=> {
          console.error(error);
         toast('Login error');
        });
    }
  
    return (
      <div className="">
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="mt-10">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="w-1/2  bg-[#32cc8c]	p-4 rounded-lg">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#146542] hover:bg-green-600 border-0 w-1/2 mx-auto text-white" >Login</button>
                </div>
              </form>
              <p className="text-center ">New Here?  Please <Link to='/register'><button className="btn btn-link text-[#146542]">Register</button></Link></p>
              <p className="text-center"> <button onClick={handleGoogle} className="btn btn-ghost text-sm normal-case md:text-base"> Sign In with Google</button></p>
            </div>
          </div>
        </div>
        <ToastContainer /> 
      </div>
    );
  };
  
  export default Login;
  