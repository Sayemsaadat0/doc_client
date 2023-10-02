import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppoinmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <section className="text-gray-600  body-font">
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <DayPicker mode='single' 
          selected={selectedDate}
          onSelect={setSelectedDate}
          ></DayPicker>
          <p className=' px-5'>You Have Seleceted  : <span className='text-blue-700 text-2xl font-semibold'>{format (selectedDate,'PP')}</span></p>
          </div>
          <div className="w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/NXTu4tJ.png" />
          </div>
        </div>
      </section>
    );
};

export default AppoinmentBanner;