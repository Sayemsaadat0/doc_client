import React from 'react';

const SectionTitle = ({ bigText, SmallText }) => {
    return (
        <div className='text-center'>
            <p className='text-secondary uppercase'>{SmallText}</p>
            <h1 className='text-4xl '>{bigText}</h1>
        </div>
    );
};

export default SectionTitle;