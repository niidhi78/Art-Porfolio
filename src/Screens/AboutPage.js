import React from 'react';
import styles from './AboutPage.module.css'

function AboutPage(props) {
    return (
        <div className={`container card ${styles.CardContainer}`}>
            <div class="card-body">
            <div className='row'>
                <div className='col-md-4'>pic</div>
                <div className='col-md-8'>para</div>
            </div>
            </div>
        </div>
    );
}

export default AboutPage;