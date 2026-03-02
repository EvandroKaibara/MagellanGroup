import styles from "./banner.module.css";
import { Link } from "react-router-dom";

export const Banner = () => {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <span className={styles.span}>• Magellan Group •</span>
                <h1 className={styles.h1}>Building the Future of Utility Infrastructure</h1>
                <p className={styles.p}>We deliver reliable solutions with safety, efficiency, and excellence in every project.</p>
                <Link to="/contact" className={styles.link}>Contact Us</Link>
            </div>
            
        </div>
    )
}