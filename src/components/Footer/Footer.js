import React from 'react';
import Title from '../Title/Title';
import styles from './Footer.module.css';

function Footer() {
	return(
		<div className={styles.footer}>
            <div className={styles.contact}>
                <div>
                        <Title heading = "SPONSORED BY" ></Title>
                        <br />
                        <img style={{margin:"0 10px 10px 0"}} src = "https://i.ibb.co/0G76yq8/SPONSOR1.png" alt="sponsor image1"/>
                        <img style={{margin:"0 10px 10px 0"}} src = "https://i.ibb.co/N66J4L5/softsuave.png" alt="sponsor image2"/>
                        <Title heading="LOCATION"></Title><br></br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248820.7757675263!2d79.66739490959117!3d12.983066509049507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd0cfb6e7ab%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering%20(SVCE)!5e0!3m2!1sen!2sin!4v1679663566988!5m2!1sen!2sin" title="location" width="350" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <button><a href="https://www.svce.ac.in/facilities/transport/bus-schedule/" className={styles.anchor}>Bus routes</a></button>
                </div>
                <img src="https://i.ibb.co/G9pXQYX/Ace-logo.png" alt="Ace_logo" border="0"/>    
                <div>
                    <Title heading="CONTACT"></Title><br></br>
                    <h1>Swetha A: <a href="tel:+917305708980">+917305708980</a></h1>
                    <h1>R. Adithyarajen: <a href="tel:+917200036383">+917200036383</a></h1>
                    <h1>Aadesh VijayaRaghavan: <a href="tel:+919445748056">+919445748056</a></h1>
                </div>			
            </div>
            <hr></hr>
            <p>All rights reserved &copy; 2023</p>
		</div>
	)
}

export default Footer;
