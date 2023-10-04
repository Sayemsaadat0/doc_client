import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [signUpError, setsignUpError] = useState('')

    const { createUser, updateUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUp = data => {
        setsignUpError('')
        console.log(data);
        createUser(data.Email, data.password)
            .then(result => {
                const user = result.user;
                alert('User Creater Successfully')
                const updateUserInfo = {
                    displayname: data.Name
                }
                updateUser(updateUserInfo)
                    .then(result => { }).catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err.message);
                setsignUpError(err.message)
            })
    }
        ;
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
                <div className="font-medium self-center text-xl sm:text-3xl uppercase text-gray-800">
                    SignUp
                </div>
                <div className="mt-10">
                    <form className='' onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full my-5 ">
                            <label>Your Name</label>
                            <input
                                className='input my-2 input-bordered w-full'
                                type="text" placeholder="Name" {...register("Name", { required: true })} />
                        </div>

                        <div className="form-control w-full my-5 ">
                            <label>Enter Your Email</label>
                            <input
                                className='input my-2 input-bordered w-full'
                                type="email" placeholder="Email" {...register("Email", { required: true })} />
                        </div>


                        <React.Fragment >
                            <label>Enter Your password </label>
                            <input
                                className='input my-2 input-bordered w-full'
                                type="password" placeholder="Password" {...register("password", { required: true })} />
                        </React.Fragment>

                        <button className='btn btn-accent w-full mt-6'>SignUp</button>
                    </form>
                    <p>{signUpError}</p>
                    <div className=" mt-6">
                        <h5 className=' text-center'>Already Have an account?? <Link to='/login' className='text-primary'>Login Here!</Link> </h5>
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

export default SignUp;