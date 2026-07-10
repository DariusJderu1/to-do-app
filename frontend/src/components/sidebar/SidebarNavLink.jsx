import { NavLink } from "react-router";
import styles from "../../styles/sidebar/SidebarNavLink.module.css";

function SidebarNavLink({path, icon, text}) {

    return (

        <NavLink 
            className={styles.navigationLink} 
            to={path}
        >
            <span className={styles.linkIcon} aria-hidden="true">{icon}</span>
            <span>{text}</span>
        </NavLink>
    );
}

export default SidebarNavLink;