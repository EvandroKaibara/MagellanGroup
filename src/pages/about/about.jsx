import styles from './about.module.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true 
            });
        }, []);

    return(        
        <>
        <div className={styles.containerBanner}>
            <h2 className={styles.h2}>Meet Our Leaders</h2>
            <p className={styles.pBanner}>See below a little about the history of our commanders and be part of history.</p>
            <img src="./imgs/Group 177.png" alt="" className={styles.bannerImg}/>
        </div>
        <div className={styles.containerText}>
            <span className={styles.spanText}>our leaders</span>
            <h3 className={styles.h3}>A LITTLE ABOUT OUR LEADERS</h3>
            <p className={styles.pText}>Below we present the companies that are part of the Magellan Group, with excellent and quality services.</p>
        </div>
        <div className={styles.containerAlexandre} data-aos="fade-up">
            <div className={styles.containerImgAlexandre}>
                <img src="./imgs/Alexandre.png" alt="" className={styles.imgAlexandre}/>
            </div>
            <div className={styles.textAlexandre}>
                <div className={styles.meet}>
                    <span className={styles.spanMeet}>MEET THE LEADERS</span>
                    <div className={styles.lineAlexandre}></div>
                </div>
                <h4 className={styles.h4}>Alex Mastandrea</h4>
                <p className={styles.p}><strong>Alex Mastandrea</strong> was born in 1972 in São Paulo, Brazil, and holds a <strong>degree in Marketing</strong> from Universidade Paulista.</p>
                <p className={styles.p}>He brings over <strong>three decades of professional experience in marketing and commercial leadership,</strong> with a track record of managing high-performance teams at multinational and national organizations, including <strong>Nestlé, 3M,</strong> and <strong>Cirúrgica Mafra,</strong> Brazil’s largest healthcare products distributor.</p>
                <p className={styles.p}>In 2009, he <strong>founded an import and distribution company,</strong> successfully leading its growth and strategic positioning until its <strong>sale in 2014,</strong> when he relocated to the United States with his family.</p>
                <p className={styles.p}>In 2019, he <strong>entered the fiber-optics sector,</strong> where he has since focused on <strong>investment, operational development,</strong> and <strong>market expansion.</strong> Beginning with a lean operational structure, he established the foundation of what would become <strong>Amt Business.</strong> His leadership continues to drive the company’s <strong>growth</strong> and <strong>long-term strategic vision.</strong></p>
            </div>
        </div>

        <div className={styles.containerHarley} data-aos="fade-down">
            <div className={styles.textHarley}>
                <div className={styles.meet}>
                    <span className={styles.spanMeet}>MEET THE LEADERS</span>
                    <div className={styles.lineHarley}></div>
                </div>
                <h4 className={styles.h4}>Harley Barboza Tavares</h4>
                <p className={styles.p}><strong>Harley Barboza Tavares</strong> was born in 1979 in Vitória, Espírito Santo, Brazil. He holds a <strong>degree in Civil Engineering,</strong> a <strong>Bachelor’s degree in Business Administration,</strong> and an <strong>MBA in Project Management.</strong></p>
                <p className={styles.p}>He began his professional journey in the construction industry at the age of 13 through his family’s business, developing early technical and operational expertise. Over the years, he built a solid career in both public and private sector projects, ultimately serving as a <strong>director at one of Espírito Santo’s leading construction firms</strong> specializing in mid- and high-end residential developments.</p>
                <p className={styles.p}>In January 2020, he entered the <strong>drilling and infrastructure sector,</strong> initiating operations following strategic investment in specialized equipment. After several years of operational growth and market expansion, he led a <strong>merger that resulted in the formation of Magellan Group,</strong> where he currently serves as <strong>Chief Financial Officer (CFO).</strong>His leadership continues to support the group’s financial strategy, operational integration, and sustainable growth.</p>
            </div>
            
            <div className={styles.containerImgHarley}>
                <img src="./imgs/Harley.png" alt="" className={styles.imgHarley}/>
            </div>
        </div>
        </>
    )
}