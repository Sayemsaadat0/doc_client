import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
                <div className="font-medium self-center text-xl sm:text-3xl uppercase text-gray-800">
                    Login
                </div>
                <div className="mt-10">
                    <form className='' onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full my-5 ">
                            <label>Enter Your Email</label>
                            <input
                                className='input my-2 input-bordered w-full'
                                type="email" placeholder="Email" {...register("Email", { required: true})} />
                        </div>


                        <React.Fragment >
                            <label>Enter Your password </label>
                            <input
                                className='input my-2 input-bordered w-full'
                                type="password" placeholder="Password" {...register("password", { required: true })} />
                        </React.Fragment>

                        <button className='btn btn-accent w-full mt-6'>Login</button>
                    </form>
                    <div className=" mt-6">
                       <h5 className=' text-center'>New to Doctor's Portal? <Link to='/signup' className='text-primary'>Create New Account</Link> </h5>
                    </div>

                    <div className='divider'>or</div>
                    <div>
                        <button className='btn w-full btn-outline'><FcGoogle size={30}></FcGoogle> COntinue with google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;