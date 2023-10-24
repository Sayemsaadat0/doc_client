import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import DentalCare from './DentalCare/DentalCare';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Feedback from './FeedBack/Feedback';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppoinment></MakeAppoinment>
            <Feedback></Feedback>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;