import React from 'react';
import doctor from "../../../../assets/images/doctor.png"
import appoinment from "../../../../assets/images/appointment.png"

const MakeAppoinment = () => { 
    return (
 <section className='lg:py-60'>
      <div className='' style={{
    background: `url(${appoinment})` 
   }}>
         <div className="hero ">
            <div className="hero-content max-w-[1920px] flex-col justify-between  text-white  lg:flex-row">
                <img  src={doctor} className="lg:w-1/2 lg:block hidden -mt-72" />
                <div> 
                    <p className='text-primary uppercase'>Appointment</p>
                    <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary  text-white">Get Started</button>
                </div>
            </div>
        </div>
   </div>
 </section>
    );
};

export default MakeAppoinment;