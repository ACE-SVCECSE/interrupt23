import React from 'react';
import EventCard from '../EventCard/EventCard';
import Title from '../Title/Title';
import styles from './EventsList.module.css';
import Slider from "react-slick";
import getEvents from '../../data/eventsData';

function EventsList() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const events = getEvents();
	return (
        <div className="EventList" style={{minHeight:"85vh"}}>
            <Title heading="EVENTS"></Title>
            <Slider {...settings} className={ styles.list}>
                {events.map((event)=><EventCard data={event}></EventCard>)}
            </Slider>        
        </div>

		);
}

export default EventsList;
