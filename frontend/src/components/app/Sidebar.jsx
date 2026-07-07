import ProjectList from "../sidebar/ProjectList.jsx";
import AddProjectButton from "../sidebar/AddProjectButton.jsx";
import styles from "../../styles/app/Sidebar.module.css";

function Sidebar({isOpenDrawer}) {

    return (

        <aside 
            className={`${styles.sidebarLayout} ${isOpenDrawer ? styles.drawerOpen : ""}`}
        >
            <nav className={styles.navigation} aria-label="Main navigation">
                <span className={styles.sectionTitle}>Home</span>

                <a className={styles.navigationLink} href="#">
                    <span className={styles.linkIcon} aria-hidden="true">📋</span>
                    <span>All Tasks</span>
                </a>

                <a className={styles.navigationLink} href="#">
                    <span className={styles.linkIcon} aria-hidden="true">📅</span>
                    <span>Today</span>
                </a>

                <a className={styles.navigationLink} href="#">
                    <span className={styles.linkIcon} aria-hidden="true">🗓️</span>
                    <span>Next 7 Days</span>
                </a>

                <a className={styles.navigationLink} href="#">
                    <span className={styles.linkIcon} aria-hidden="true">⭐</span>
                    <span>Important</span>
                </a>

                <span className={styles.sectionTitle}>Projects</span>

                <ProjectList />
            </nav>

            <AddProjectButton />
        </aside>
    );
}

export default Sidebar;