import styles from './contact.module.css'

export const Contact = () => {
    return (
        <>
            <div className={styles.containerBanner}>
                <h2 className={styles.h2}>Contact Us</h2>
                <p className={styles.pBanner}>Connect with our team for service inquiries, project information, or partnership opportunities. We’ll follow up right away.</p>
            </div>

            <div className={styles.meet}>
                <span className={styles.spanMeet}>CONTACT US</span>
                <div className={styles.line}></div>
            </div>

            <div className={styles.titleForm}>
                <span className={styles.spanTitle}>Join Us in Creating Something Great</span>
                <img src="./imgs/Group 237.png" alt="" className={styles.imgTitle}/>
            </div>

            <section className={styles.containerContact}>
                <div className={styles.formArea}>
                    <form className={styles.form}>

                        <input type="text" placeholder="First Name *" />
                        <input type="text" placeholder="Last Name *" />

                        <input type="email" placeholder="Email *" />
                        <input type="tel" placeholder="Phone Number *" />

                        <input
                            type="text"
                            placeholder="Subject *"
                            className={styles.full}
                        />

                        <textarea
                            placeholder="Message *"
                            rows="6"
                            className={styles.full}
                        ></textarea>

                        <button className={styles.button}>Send Message</button>
                    </form>
                </div>

                <div className={styles.imageArea}>
                    <img src="/imgs/Rectangle 68.png" alt="contact" className={styles.img} />
                </div>
            </section>

            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4520.154401388712!2d-81.42394442371402!3d28.59960788557355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e770b1e00829a3%3A0x8bd1e6113d9bc93f!2s3749%20Parkway%20Center%20Ct%2C%20Orlando%2C%20FL%2032808%2C%20USA!5e1!3m2!1sen!2sbr!4v1773414190872!5m2!1sen!2sbr"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}