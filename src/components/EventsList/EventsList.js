import React from 'react';
import EventCard from '../EventCard/EventCard';
import styles from './EventsList.module.css';
import Slider from "react-slick";


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
	return (
        <div className="EventList">
            <div className={styles.title }>
                <p className={styles.heading}>&emsp; Events</p>
                <h1>Lorem Ipsum</h1>
            </div>

            <Slider {...settings} className={ styles.list}>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
                <EventCard></EventCard>
            </Slider>

            
        </div>

		);
}

export default EventsList;
