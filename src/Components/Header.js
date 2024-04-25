import React from 'react';
import headerPng from '../Assets/header.jpg';
import styles from './Header.module.css'

function Header(props) {
    return (
        <div>
            <div className={styles.headerBox} style={{ position: 'relative', backgroundImage: `url(${headerPng})`,opacity: 0.4 }}></div>
            <h5 style={{position: 'absolute', top: '150px', left: '50%', transform: 'translate(-50%, -50%)', color: 'black'}}>Welcome to my Art Portfolio</h5>
        </div>
    );
}

export default Header;