import { useState } from "react";
import ProjectList from "../sidebar/ProjectList.jsx";
import AddProjectTaskButton from "../ui/AddProjectTaskButton.jsx";
import ProjectForm from "../sidebar/ProjectForm.jsx";
import SidebarNavLink from "../sidebar/SidebarNavLink.jsx";
import styles from "../../styles/app/Sidebar.module.css";

const sidebarNavLinks = [

    {
        path: "/",
        icon: "📋",
        text: "All Tasks"
    },

    {
        path: "today",
        icon: "📅",
        text: "Today"
    },

    {
        path: "next-seven-days",
        icon: "🗓️",
        text: "Next 7 Days"
    },

    {
        path: "important",
        icon: "⭐",
        text: "Important"
    },

];

function Sidebar({isOpenDrawer}) {

    const [openForm, setOpenForm] = useState(false);

    return (

        <aside 
            className={`${styles.sidebarLayout} ${isOpenDrawer ? styles.drawerOpen : ""}`}
        >
            <nav className={styles.navigation} aria-label="Main navigation">
                <span className={styles.sectionTitle}>Home</span>

                {sidebarNavLinks.map(navLink => {
                    return <SidebarNavLink key={navLink.text} path={navLink.path} icon={navLink.icon} text={navLink.text} />
                })}

                <span className={styles.sectionTitle}>Projects</span>

                <ProjectList />
            </nav>

            {!openForm ? 
                <AddProjectTaskButton text={"Add Project"} handleOpenForm={setOpenForm} openForm={openForm} /> :
                <ProjectForm mode={"add"} openForm={openForm} handleOpenForm={setOpenForm} />}
        </aside>
    );
}

export default Sidebar;