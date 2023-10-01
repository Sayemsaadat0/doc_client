import React from 'react';
import Clock from "../../../../assets/icons/clock.svg"
import Marker from "../../../../assets/icons/marker.svg"
import Phone from "../../../../assets/icons/phone.svg"

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm every Day',
            icon: Clock,
            bgColor : 'bg-primary'
        },
        {
            id: 2,
            name: 'Opening LOcation',
            description: 'Ukil Para, Naogon Sadar, Naogaon ',
            icon: Marker,
            bgColor : 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00 pm every Day',
            icon: Phone,
            bgColor : 'bg-primary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 py-10 text-white'>
            {
                cardData.map((data, index) => <div key={index} className="card bg-gradient-to-r from-primary to-secondary   duration-700 shadow-xl">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-10'>
                            <img className='w-16' src={data.icon} alt="" />
                            <div>
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default InfoCards;