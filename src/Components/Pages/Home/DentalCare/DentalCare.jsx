import React from 'react';
import Treatment from "../../../../assets/images/treatment.png"
const DentalCare = () => {
    return (
        <div className='lg:py-20 py-10 '>
            <div className="lg:flex items-center justify-center gap-20">
                <img className='h-[70%]' src={Treatment} alt="Album" />
                <div className="px-2 flex flex-col justify-center    lg:w-1/2">
                    <h2 className="text-5xl font-bold my-6">Exceptional Dental Care,  on Your Terms!</h2>
                    <p className='mb-6 lg:w-[80%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>  

                    <button className='btn w-[40%] lg:w-[20%] bg-gradient-to-r text-white from-primary to-secondary'>GET STARTED</button>
                </div>

            </div>
        </div>
    );
};

export default DentalCare;