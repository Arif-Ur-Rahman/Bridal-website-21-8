import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const RegAdmin = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const res = await createUser(data.name,data.photo, data.email, data.password);
            const loggedUser = res.user;
            console.log(loggedUser);
            const userInfo = {
                name: data.name,
		            photo: data.photo,
                email: data.email,
		            password: data.password
                 

            };

            const userRes = await axiosPublic.post('/user', userInfo);

            if (userRes.data.insertedId) {
                reset();
                Swal.fire({
                    title: "Created",
                    text: `User created successfully`,
                    icon: "success"
                });
                navigate('/login');
            }
 
        } catch (error) {
            console.error(error);
            // Handle error, show toast, etc.
        }
    };

   return (
        <div>
            <div className="flex justify-center mt-20">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" required />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">logo Url</span>
                                </label>
                                <input type="text" {...register("logo", { required: true })} name='logo' placeholder="logo url" className="input input-bordered" required />
                                {errors.logo && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]/
 })} name='password' placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase, lowercase, special character, and number</span>}
                            </div>
                         


                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-yellow-600 text-white hover:bg-yellow-600">Sign Up</button>
                            </div>
                        </form>
                        <p className="text-center my-4">Already have an Account?<Link to='/login'>Login</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RegAdmin;