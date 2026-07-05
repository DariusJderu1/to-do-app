import { RiMenuUnfold4Line } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router";
import styles from "../../styles/app/Header.module.css";

function Header() {

    return (
        
        <header className={styles.headerLayout}>
            <button className={styles.iconButton} aria-label="Open navigation menu">
                <RiMenuUnfold4Line />
            </button>
            
            <Link className={styles.logo} to="/">
                <span>Get</span>
                <span className={styles.logoAccent}>Done</span>
            </Link>

            <button className={`${styles.iconButton} ${styles.settingsButton}`} aria-label="Open settings">
                <IoSettingsSharp />
            </button>
        </header>
    );
}

export default Header;