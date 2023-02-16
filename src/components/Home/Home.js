import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import styles from './Home.module.css';

function Home() {
	return <>
	<div >
		<div className={styles.parent}>
			<div className={styles.left}>
					<SubHeading title="ACE"></SubHeading>
			</div>
				
			<div className={styles.right}>
				<img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg' alt='img'></img>
			</div>			
		</div>
	</div>
	</>
}

export default Home;