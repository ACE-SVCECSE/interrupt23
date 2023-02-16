import React from 'react';
import styles from './Home.module.css';
import SubHeading  from '../SubHeading/SubHeading'

function Home() {
	return <>
	<div >
		<div class={styles.parent}>
			<div class={styles.left}>
			<SubHeading title="ACE"/>
				<h1 class={styles.heading}>INTERRUPT '23</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, amet ad repellat molestiae nulla iste adipisci quis consequatur? Quidem enim exercitationem nulla distinctio corporis vitae architecto blanditiis saepe consectetur quasi.</p>
				<button>View More</button>
			</div>
			<div class={styles.right}>
				<img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg' alt='img'></img>
			</div>			
		</div>
	</div>
	</>
}

export default Home;