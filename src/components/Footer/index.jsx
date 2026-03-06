import styles from './footer.module.css'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer>
            <div className={styles.title}>
                <h5 className={styles.h5}>Let's <span className={styles.spanTitle}>Connect </span>there</h5>
                <Link to="/contact" className={styles.linkTitle}>Contact Us Now</Link>
            </div>
            <hr />
            <div className={styles.footerItems}>
                <div className={styles.item1}>
                    <img src="./imgs/Logo.png" alt="" />
                    <p className={styles.pItem1}>We deliver reliable solutions with safety, efficiency, and excellence in every project.</p>
                    <img src="./imgs/Group 213.png" alt="" />
                </div>

                <div className={styles.item2}>
                    <h6 className={styles.h6}>Navigation</h6>
                    <Link to="/" className={styles.linkItem2}>Home</Link>
                    <Link to="/about" className={styles.linkItem2}>About us</Link>
                    <Link to="/contact" className={styles.linkItem2}>Contact</Link>
                </div>

                <div className={styles.item3}>
                    <h6 className={styles.h6}>Contact</h6>
                    <span className={styles.spanNumber}>(321) 285-5022</span>
                    <span className={styles.spanItem3}>https://www.magellangroup1.com/</span>
                    <span className={styles.spanItem3}>info@magellangroup1.com</span>
                    <span className={styles.spanLocation}>3479 - Parkway Center Court, Orlando, FL 328080</span>
                </div>

                <div className={styles.item4}>
                    <h6 className={styles.h6}>Get the latest information</h6>

                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className={styles.input}
                        />

                        <button className={styles.button}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.copyright}>
                <span>Copyright ... Texto</span>
                <span>User Terms & Conditions | Privacy Policy</span>
            </div>
        </footer>
    )
}