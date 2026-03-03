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

            <div className={styles.containerStatus}>
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

            <div className={styles.containerServices}>
                <span className={styles.span}>Our Services</span>
                <h3 className={styles.h3}>Our Infrastructure Services</h3>
                <p className={styles.pCompanies}>Magellan Group provides a wide range of infrastructure solutions designed to support telecommunications and underground utility networks across the United States.</p>
            </div>

            <div className={styles.servicesCards}>
                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src="/imgs/FiberPulling.png" alt="Fiber Pulling" />
                    </div>

                    <div className={styles.serviceContent}>
                        <span className={styles.serviceTag}>SERVICES</span>
                        <h4>Fiber Pulling</h4>
                        <p>Professional installation of fiber optic cables</p>
                        <Link to="/contact" className={styles.serviceButton}>
                            Read More
                        </Link>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src="/imgs/DirectionalDrilling.png" alt="Directional Drilling" />
                    </div>

                    <div className={styles.serviceContent}>
                        <span className={styles.serviceTag}>SERVICES</span>
                        <h4>Directional Drilling</h4>
                        <p>Trenchless drilling solutions for underground utilities</p>
                        <Link to="/contact" className={styles.serviceButton}>
                            Read More
                        </Link>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.serviceImage}>
                        <img src="/imgs/SplicingTesting.png" alt="Splicing & Testing" />
                    </div>

                    <div className={styles.serviceContent}>
                        <span className={styles.serviceTag}>SERVICES</span>
                        <h4>Splicing & Testing</h4>
                        <p>High-precision fiber splicing and network testing</p>
                        <Link to="/contact" className={styles.serviceButton}>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.containerMeet}>
                <div className={styles.meetImage}>
                    <img src="./imgs/Meet.png" alt="" className={styles.imageMeet}/>
                </div>
                <div className={styles.meetText}>
                    <div className={styles.containerSpan}>
                        <span className={styles.spanMeet}>MEET THE LEADERS</span>
                        <div className={styles.line}></div>
                    </div>
                    
                    <h3 className={styles.h3Meet}>Discover Our Experienced Team Of Head Infrastructure Business </h3>
                    <p className={styles.pMeet}>Our team brings together engineers, technicians, and infrastructure specialists with years of combined experience in telecommunications and underground construction.</p>
                    <Link to="/about" className={styles.linkMeet}>Meet our leaders</Link>
                </div>
            </div>
        </>
    )
}