import { Link } from "react-router-dom";
import styles from './home.module.css'

export const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span className={styles.spanBanner}>• Magellan Group •</span>
                    <h1 className={styles.h1}>Building the Future of Utility Infrastructure</h1>
                    <p className={styles.pBanner}>We deliver reliable solutions with safety, efficiency, and excellence in every project.</p>
                    <Link to="/contact" className={styles.linkBanner}>Contact Us</Link>
                </div>

            </div>
            
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
                    <img src="./imgs/Meet.png" alt="" className={styles.imageMeet} />
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

            <div className={styles.containerTimelineText}>
                <div className={styles.containerTimelineInfo}>
                    <img src="./imgs/Logo Magellan Group.png" alt="" className={styles.imgLogoTimeline}/>
                    <img src="./imgs/Titulo.png" alt="" className={styles.imgTitleTimeline}/>
                    <p className={styles.pTimelineTitle}>The creation of Magellan Group allowed businesses and communities to build the future together, just as its founders had always envisioned. This is the story of how their union revolutionized the infrastructure and construction sector in Florida.</p>
                </div>
                <div>
                    <img src="./imgs/Foto.png" alt="" className={styles.timelineImg}/>
                </div>
            </div>

            <div className={styles.timeline1}>
                <div className={styles.timelineCard1}>
                    <div>
                        <img src="./imgs/AMT.png" alt="" className={styles.timelineImage1}/>
                    </div>
                    <div className={styles.timelineCard1Container2}>
                        <h4 className={styles.h4Timeline}>THE BEGGINING <br /><span className={styles.spanTimeline}>OF EVERYTHING</span></h4>
                        <p className={styles.pTimeline}>In 2020, AMT Fiber Solutions was founded in Orlando, Florida, starting as a small fiber pulling company operating with a single machine and working with a single prime contractor. Despite the modest beginning, the company was built on strong principles of reliability, efficiency, and commitment to quality service in the telecommunications infrastructure sector. </p>
                    </div>
                </div>

                <div className={styles.timelineCard2}>
                    <h4 className={styles.h4Timeline}>FUSION & GROWTH</h4>
                    <p className={styles.pTimeline}>In 2022, the company expanded its capabilities by adding fiber splicing and aerial services, strengthening its presence in the telecommunications field. During this period, the arrival of Blue Ocean's CFO marked an important moment for the organization, contributing to stronger financial structure, improved management processes, and broader opportunities for new partnerships and clients.</p>
                    <img src="./imgs/Group 315.png" alt="" className={styles.timelineImage2}/>
                </div>

                <div className={styles.timelineCard3}>
                    <div>
                        <h4 className={styles.h4Timeline}>OSP UTILITIES</h4>
                        <p className={styles.pTimeline}>In 2024, the group continued its expansion with the introduction of OSP Utilities, strengthening its services in outside plant infrastructure and utility support. This addition expanded the group’s ability to deliver integrated solutions for telecommunications networks, construction projects, and infrastructure development.</p>
                    </div>
                    <div>
                        <img src="./imgs/Logo Magellan.png" alt="" className={styles.timelineImage3}/>
                    </div>
                </div>

                <div className={styles.timelineCard4}>
                    <h4 className={styles.h4Timeline}>MAGELLAN GROUP TODAY</h4>
                    <p className={styles.pTimeline}>Today, Magellan Group is composed of multiple companies operating across telecommunications, infrastructure, mechanical services, and underground construction. With continuous growth and a strong commitment to innovation and quality, the group continues to expand its impact in the industry.</p>
                </div>
            </div>
            <div className={styles.containerTimelineYears}>                
                <img src="./imgs/Anos.png" alt="" className={styles.timelineImageYears}/>
            </div>

            <div className={styles.timeline2}>
                <div className={styles.timelineCard5}>
                    <div>
                        <img src="./imgs/AMT.png" alt="" className={styles.timelineImage1}/>
                    </div>
                    <div className={styles.timelineCard1Container2}>
                        <h4 className={styles.h4Timeline}>EXPANSION OF THE BUSINESS</h4>
                        <p className={styles.pTimeline2}>After its first year of operations, the company expanded its service portfolio by introducing directional drilling services. This strategic move allowed the team to support more complex infrastructure projects and meet the growing demands of clients. </p>
                    </div>
                </div>

                <div className={styles.timelineCard6}>
                    <div>
                        <img src="./imgs/Group 314.png" alt="" className={styles.timelineImage1}/>
                    </div>
                    <div className={styles.timelineCard1Container2}>
                        <h4 className={styles.h4Timeline}>NEW CAPABILITIES </h4>
                        <p className={styles.pTimeline2}>In 2023, the group expanded its operations with the creation of A3 Mechanics. The company focuses on mechanical services for trucks and heavy equipment, as well as the manufacturing of trailers for commercial and industrial use. This new branch diversified the group’s activities.</p>
                    </div>
                </div>

                <div className={styles.timelineCard7}>
                    <div>
                        <h4 className={styles.h4Timeline}>EHL UNDERGROUND SOLUTIONS</h4>
                    </div>
                    <div className={styles.timelineEHL}>
                        <img src="./imgs/EHL.png" alt="" className={styles.ehlImage}/>
                        <p className={styles.pTimeline2}>In 2025, the Magellan Group introduced EHL Underground Solutions, a company focused on innovative underground construction services. EHL specializes in excavation, infrastructure development, sanitation systems, energy networks, and telecommunications installations, strengthening the group’s capabilities in large-scale infrastructure projects.</p>
                    </div>
                </div>
            </div>
        </>
    )
}