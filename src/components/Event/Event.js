import React from 'react';
import styles from './Event.module.css';

function Event() {
		return (
		  <div>
			{/* Google Fonts */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />
			{/******/}
			{/* Main Content */}
			<div className={styles.flexContainer}>
			  <div className={styles.textContainer}>
				<h1 className={styles.heading}>Lorem Ipsum</h1>
				<p className={styles.discText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elit ornare, imperdiet diam id, ultrices tortor. 
				Phasellus imperdiet dolor in metus malesuada, nec varius nibh maximus. Nulla convallis dui id purus posuere, et accumsan felis sodales. 
				Nullam vitae mollis lectus. Quisque porta lobortis feugiat. Donec molestie pulvinar libero, ac mattis risus fermentum posuere. Nunc et sapien dolor. 
				Morbi pharetra, augue non malesuada accumsan, felis orci vehicula purus, condimentum tempor lacus quam eu dolor. Praesent aliquam gravida libero. 
				Praesent non diam vitae libero vulputate aliquet commodo nec orci. Maecenas convallis, tellus id feugiat porta, 
				nisl neque congue augue, at sollicitudin nisi metus sit amet mi. </p>
				<h2 className={styles.subHeading}><strong>Rules:</strong></h2>
				<ol>
				  <li className={styles.rulesTxt}>Sed pretium justo ornare facilisis cursus. In sed egestas velit. Pellentesque ultrices metus ut ligula tincidunt euismod. Proin lorem lectus, fringilla nec auctor rhoncus, tristique sit amet felis.</li>
				  <li className={styles.rulesTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus non risus ut tempus. Donec vel velit feugiat, sodales lorem vel, ultricies quam. Fusce fringilla ullamcorper diam, vitae.</li>
				  <li className={styles.rulesTxt}>Praesent vitae pretium ex. Aenean non ultricies nibh. Proin et enim eleifend, imperdiet magna ut, ullamcorper neque. Maecenas a lorem eu tellus sollicitudin imperdiet quis sit amet metus.</li>
				  <li className={styles.rulesTxt}>Pellentesque lacinia lobortis ante, et mattis ante. Morbi fringilla semper urna et venenatis. Cras vel laoreet justo, nec auctor mi. Suspendisse venenatis lobortis mi, sed vehicula dolor auctor.</li>
				  <li className={styles.rulesTxt}>Mauris a est at lorem ullamcorper dignissim nec sed erat. Nunc consectetur lacus neque, non volutpat odio viverra eu. Fusce pellentesque diam et aliquam congue. Nulla sagittis fringilla.</li>
				  <li className={styles.rulesTxt}>Maecenas blandit sem eget diam aliquam porttitor. Sed sed finibus felis. Aenean vulputate dui nulla, quis ultricies purus efficitur et. Nunc accumsan hendrerit cursus. Praesent erat eros, sodales.</li>
				  <li className={styles.rulesTxt}>Aenean ultrices at arcu ut consequat. Maecenas blandit ac risus consequat pellentesque. In non lorem a arcu viverra elementum vel quis lectus. Quisque fringilla commodo ante ac dignissim.</li>
				</ol>
				<p className={styles.deadlineText}><span className="bold-txt">Deadline to Register:</span> 5th May 2021, 11:59 p.m.</p>
				<a href="http://www.acesvce.in/" target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>REGISTER</a>
			  </div>
			  <div className={styles.imgDiv}>
				<img src="https://picsum.photos/1080/1350" alt="fake-img" className={styles.fakeImg} />
			  </div> 
			</div>
		  </div>
		);
}

export default Event;
