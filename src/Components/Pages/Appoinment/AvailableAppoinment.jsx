import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppoinment = ({ selectedDate, setSelectedDate }) => {
    const [appoinmentOption, setAppoinmentOptions] = useState([]) 
    const [treatment, setTreatment] = useState(null)
    
    useEffect(() => {
        fetch('appoinmentOptions.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))
    }, [])


    const handleBookAppointment = (data) => {
        setTreatment(data);
        document.getElementById('my_modal_5').showModal();
    }

    return (
        <div>
            <p className=' text-primary'>Available service on : {format(selectedDate, 'PP')}</p>

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
                                <button onClick={() => handleBookAppointment(data)} className='btn btn-primary bg-gradient-to-r from-primary to-secondary   text-white w-1/2' type='submit'>BOOK APPOINTMENT</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id="my_modal_5" className="modal modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    {treatment && (
                        <div>
                            <h4>Treatment Information:</h4>
                            <p>Treatment Name: {treatment.name}</p>
                        </div>
                    )}
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={() => setTreatment(null)}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AvailableAppoinment;
