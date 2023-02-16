import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Home from '../Home/Home';
import Event from '../Event/Event';
import EventsList from '../EventsList/EventsList';
import Ace from '../Ace/Ace';
import Guidelines from '../Guidelines/Guidelines';
import Contact from '../Contact/Contact';

function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const handleHamburgerClick = () => { 
        setIsMenuVisible((value) => value ? false : true)
    }
    const menuClassName = `${styles.navmenu} ${isMenuVisible ? styles.active : ''}`
    const hamburgerClassName = `${styles.hamburger} ${isMenuVisible ? styles.active : ''}`
    return (
        <Router>
            <div className={styles.headerwrap}>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <img alt="logo"  src="../logo192.png"/>
                    </div>
                    <div className={menuClassName}>
                        <div className={styles.navitems}>
                            <li><Link to="/">Home</Link></li>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.navitems}>
                            <li><Link to="/event">Event</Link></li>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.navitems}>
                            <li><Link to="/eventslist">EventsList</Link></li>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.navitems}>
                            <li><Link to="/ace">Ace</Link></li>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.navitems}>
                            <li><Link to="/guidelines">Guidelines</Link></li>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.navitems}>
                            <li><Link to="/contact">Contact</Link></li>
                            <div className={styles.line}></div>
                        </div>
                    </div>
                    <button className={hamburgerClassName} onClick={handleHamburgerClick}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>
            <div>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/event' element={< Event />}></Route>
                    <Route exact path='/eventslist' element={< EventsList />}></Route>
                    <Route exact path='/ace' element={< Ace />}></Route>
                    <Route exact path='/guidelines' element={< Guidelines />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Header;
