import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <p className=' text-primary'>Available service on  : {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableAppoinment;