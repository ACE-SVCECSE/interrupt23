import React from 'react';
import Title from '../Title/Title';
import styles from './Contact.module.css';

function Contact() {
	return(
		<>
		<Title heading="CONTACT"></Title>
		<div className={styles.contact}>
			<h1>Swetha A: +91 73057 08980</h1>
			<h1>R.Adithyarajen: +91 72000 36383</h1>
			<h1>Aadesh VijayaRaghavan:+91 94457 48056</h1>

			<div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248820.7757675263!2d79.66739490959117!3d12.983066509049507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd0cfb6e7ab%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering%20(SVCE)!5e0!3m2!1sen!2sin!4v1679663566988!5m2!1sen!2sin" title="location" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br></br>
					<button><a href="https://www.svce.ac.in/facilities/transport/bus-schedule/" className={styles.anchor}>Bus routes</a></button>
			</div>
		</div>
		</>
	)
}

export default Contact;
