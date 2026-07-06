import { IoLogoGithub } from "react-icons/io";
import styles from "../../styles/app/Footer.module.css";

function Footer() {

    return (

        <footer className={styles.footerLayout}>
            <a
                className={styles.githubLink}
                href="https://github.com/DariusJderu1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit DariusJderu1 on GitHub"
            >
                <span>DariusJderu1</span>
                <IoLogoGithub
                    className={styles.githubIcon}
                    aria-hidden="true"
                />
            </a>
        </footer>
    );
}

export default Footer;