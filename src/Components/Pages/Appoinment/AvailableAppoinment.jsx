import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';

const AvailableAppoinment = ({ selectedDate, setSelectedDate }) => {

    const [treatment, setTreatment] = useState(null)


    const { data: appoinmentOption = [], isLoading } = useQuery(['appoinmentOption'], async () => {
        const response = await fetch(`${import.meta.env.VITE_PROJECTURL}/appoinmentOptions`)
        const responseData = await response.json()
        return responseData
    })

    // opening modal by clicking 
    const handleOpenModal = (data) => {
        setTreatment(data);
        document.getElementById('my_modal_5').showModal();
    }
    const date = format(selectedDate, 'PP');

    // handle data 
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch(`${import.meta.env.VITE_PROJECTURL}/bookings`,
            {
                method: 'POST',
                headers: {
                    'content-Type': 'appilication/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(datass => {
                console.log(datass);
            })

    };


    return (
        <div>
            <p className=' text-primary text-center'>Available service on : {date}</p>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-20'>
                {appoinmentOption.map((data, index) => (
                    <div key={index} className="card bg-base-100 border py-6">
                        <div className="card-body text-gray-600 text-center">
                            <h2 className="text-xl text-primary font-bold">
                                {data.name}
                            </h2>
                            <p>{data.slots.length > 0 ? data.slots[0] : 'try another day'}</p>
                            <p>{data.slots.length} {data.slots.length > 1 ? 'spaces' : 'space'} available </p>
                            <div className='flex justify-center'>
                                <button disabled={data.slots.length == 0} onClick={() => handleOpenModal(data)} className='btn btn-primary bg-gradient-to-r from-primary to-secondary   text-white w-1/2' type='submit'>BOOK APPOINTMENT</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id="my_modal_5" className="modal modal-middle">

                <div className="modal-box">


                    {treatment && (
                        <div>
                            <h3 className='text-xl font-semibold mb-10'>{treatment.name}</h3>

                            <div >
                                <form className='flex  flex-col gap-6 ' onSubmit={handleSubmit(onSubmit)}>

                                    {/* everything is working without this  */}
                                    {/*    <input
                                        className='input input-bordered text-black' type="text"
                                        placeholder={date}
                                        {...register("date")} /> */}

                                    <select {...register("slot", { required: true })} className="select select-bordered w-full ">
                                        <option disabled selected>Select time</option>
                                        {treatment.slots?.map((slot, index) => <option key={index}>{slot}</option>)}
                                    </select>

                                    <input
                                        className='input input-bordered'
                                        type="text"
                                        placeholder="Your Full Name"
                                        {...register("fullname", { required: true, maxLength: 80 })} />


                                    <input
                                        className='input input-bordered'
                                        type="number"
                                        placeholder="Phone No."
                                        {...register("phone", { required: true, maxLength: 80 })} />

                                    <input
                                        className='input input-bordered'
                                        type="email"
                                        placeholder="Enter Email"
                                        {...register("email", { required: true, maxLength: 80 })} />



                                    <div className='flex justify-center'>
                                        <button className='btn bg-gradient-to-r from-primary to-secondary  btn-primary w-full text-white' type='submit'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="" onClick={() => setTreatment(null)}> <AiFillCloseCircle size={30}></AiFillCloseCircle> </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AvailableAppoinment;
