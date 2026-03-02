import styles from "./header.module.css";
import { IoMdAlarm } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      
      <div className={styles.topHeader}>
            <div className={styles.hours}>
                <IoMdAlarm color="green" size={18} />
                <span>
                    <strong>Opening Hours:</strong> Sun - Fri (08AM - 10PM)
                </span>
            </div>

            <div className={styles.info}>
                <div className={styles.address}>
                    <IoLocationOutline color="aqua" size={18} />
                    <span>
                        <strong className={styles.strongAddress}>Located at:</strong> 3749 Parkway Center Ct
                    </span>
                </div>

                <div className={styles.email}>
                    <span>REACH US: info@magellangroup1.com</span>
                </div>
            </div>
        </div>

      <div className={styles.bottomHeader}>
            <div className={styles.logo}>
                <img src="/imgs/Logo.png" alt="Magellan Logo" className={styles.img}/>
            </div>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/about" className={styles.link}>About</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
            </nav>

            <div className={styles.number}>
                <span className={styles.numberSpan}>Call Us Anytime</span>
                <strong className={styles.strongSpan}>(321) 285-5022</strong>
            </div>
        
            <div className={styles.quote}>
                <span className={styles.spanQuote}>
                    Request a quote
                </span>
            </div>
        </div>
    </header>
  );
};