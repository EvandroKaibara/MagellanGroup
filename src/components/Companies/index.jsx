import styles from './companies.module.css'

export const Companies = () => {
    return(
        <>
        <div className={styles.container}>
            <span className={styles.span}>Our Services</span>
            <h3 className={styles.h3}>Our Companies</h3>
            <p className={styles.p}>Below we present the companies that are part of the Magellan Group, with excellent and quality services.</p>
        </div>
        <div className={styles.containerImages}>
            <img src="/imgs/Magellan Group.png" alt="Magellan Group" className={styles.img}/>
            <img src="/imgs/AMT.png" alt="AMT Business" className={styles.img}/>
            <img src="/imgs/Magellan UC.png" alt="Magellan UC" className={styles.img}/>
            <img src="/imgs/Blueocean.png" alt="Blueocean" className={styles.img}/>
            <img src="/imgs/EHL.png" alt="EHL Underground" className={styles.img}/>
            <img src="/imgs/A3.png" alt="A3 Mechanic" className={styles.img}/>
        </div>
        </>
    )
}