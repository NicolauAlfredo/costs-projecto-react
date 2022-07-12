import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_list}> <FaFacebook /> </li>
                <li className={styles.social_list}> <FaInstagram /> </li>
                <li className={styles.social_list}> <FaLinkedin /> </li>
            </ul>
            <p className={styles.copy_right}> <span>Costs</span> &copy; 2022 by <a href='www.google.com'>Nicolau Alfredo</a> </p>
        </footer>
    )
}

export default Footer