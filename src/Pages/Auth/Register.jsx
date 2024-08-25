import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();  

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    if(password.length < 6){
        toast('The password is less than 6 characters');
    }
    else if(!/[A-Z]/.test(password)){
        toast('Do not have a capital letter');
    }
    else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)){
        toast('Do not have a special character');
    }

   else{
     // Check if createUser is a valid function
    
      // Create user in Firebase
      createUser(name, photo, email, password)
        .then((result) => {
          console.log("User registered:", result.user);
          toast('Successful Registration');

      
        })
        .catch((error) => {
          console.error("Registration error:", error);
          toast('Registration error');
        });
    
   }
  };

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="mt-10">
            <h1 className="text-2xl md:text-5xl font-bold">Register now!</h1>
          </div>
          <div className="w-1/2 bg-[#32cc8c] p-4 rounded-lg">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your Name" 
                        className="input input-bordered" required 
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" 
                    name="photo" 
                    placeholder="Enter Photo Url" 
                    className="input input-bordered" required 
                    />
                </div>
                 
              <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
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
                    placeholder="Password"
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
                    <button className="btn bg-[#146542] hover:bg-green-600 border-0  md:w-1/2 mx-auto text-white">Register</button>
                </div>
            </form>
            <p className="text-center text-xs md:text-base">
              Already have an Account? Please{" "}
              <Link to="/login">
                <button className="btn btn-link text-[#146542]">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default Register;