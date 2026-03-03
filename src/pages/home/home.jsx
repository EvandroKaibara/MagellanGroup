import { Banner } from "../../components/Banner"

import { Link } from "react-router-dom";
import styles from './home.module.css'

export const Home = () => {
    return (
        <>
            <Banner />
            <div className={styles.containerCompanies}>
                <span className={styles.span}>Our Services</span>
                <h3 className={styles.h3}>Our Companies</h3>
                <p className={styles.pCompanies}>Below we present the companies that are part of the Magellan Group, with excellent and quality services.</p>
            </div>
            <div className={styles.containerImages}>
                <img src="/imgs/Magellan Group.png" alt="Magellan Group" className={styles.img} />
                <img src="/imgs/AMT.png" alt="AMT Business" className={styles.img} />
                <img src="/imgs/Magellan UC.png" alt="Magellan UC" className={styles.img} />
                <img src="/imgs/Blueocean.png" alt="Blueocean" className={styles.img} />
                <img src="/imgs/EHL.png" alt="EHL Underground" className={styles.img} />
                <img src="/imgs/A3.png" alt="A3 Mechanic" className={styles.img} />
            </div>

            <div className={styles.sectionAbout}>
                <div className={styles.containerAbout}>
                    <div className={styles.containerText}>
                        <span className={styles.span}>About Magellan</span>
                        <h3 className={styles.h3}>Reliable Infrastructure Solutions</h3>
                        <p className={styles.pAbout}>Magellan Group provides complete utility infrastructure services for telecommunications and underground construction projects. Our experienced team delivers efficient, safe, and high-quality solutions.</p>
                        <div className={styles.containerList}>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Underground Infrastructure</li>
                                <li className={styles.listItem}>Mechanical Services</li>
                                <li className={styles.listItem}>Fiber Splicing</li>
                            </ul>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Aerial Installation</li>
                                <li className={styles.listItem}>Fiber Pulling</li>
                                <li className={styles.listItem}>Directional Drilling</li>
                            </ul>
                        </div>
                        <div className={styles.aboutContact}>
                            <Link to="/contact" className={styles.linkAbout}>Contact Us</Link>
                            <div className={styles.aboutNumber}>
                                <span className={styles.spanQuestions}>Have questions?</span>
                                <span className={styles.spanNumber}>(321) 285-5022</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerAboutImage}>
                        <img src="./imgs/About.png" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.status}>
                <div className={styles.statusCard}>
                    <span className={styles.statusCardTitle}>50+</span>
                    <span className={styles.statusCardText}>Satisfied Customers</span>
                </div>
                <div className={styles.statusCard}>
                    <span className={styles.statusCardTitle}>150+</span>
                    <span className={styles.statusCardText}>Qualified Professionals</span>
                </div>
                <div className={styles.statusCard}>
                    <span className={styles.statusCardTitle}>1500+</span>
                    <span className={styles.statusCardText}>Projects Completed</span>
                </div>
                <div className={styles.statusCard}>
                    <span className={styles.statusCardTitle}>650K+ Miles</span>
                    <span className={styles.statusCardText}>Fiber Infrastructure Built</span>
                </div>
            </div>
        </>
    )
}