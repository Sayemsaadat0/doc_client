import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import fluoride from '../../../../assets/images/fluoride.png'
import Cavity from '../../../../assets/images/cavity.png'
import Whitening from '../../../../assets/images/whitening.png'

const Services = () => {
    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Whitening
        },
    ]
    return (
        <div className='lg:py-24'>
            <div className='text-center'>
                <SectionTitle bigText={'Service We Provide'} SmallText={'our service'}></SectionTitle>
            </div>



            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-20'>
                {
                    cardData.map((data, index) => <div
                        key={index}
                        className="card bg-base-100 border py-6">
                        <div className='flex justify-center'>
                            <img className='w-44' src={data.icon} alt="Shoes" />
                        </div>
                        <div className="card-body text-gray-600 text-center">
                            <h2 className="text-xl font-bold">
                                {data.name}
                            </h2>
                            <p>{data.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;