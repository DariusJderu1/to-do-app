import { useState } from "react";
import { Outlet } from "react-router";
import useProjects from "./app/hooks/useProjects.js";
import useTasks from "./app/hooks/useTasks.js";
import ProjectsContext from "./app/context/ProjectsContext.jsx";
import Header from "./app/Header.jsx";
import Sidebar from "./app/Sidebar.jsx";
import Footer from "./app/Footer.jsx";
import styles from "../styles/App.module.css";

function App() {

    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const projectsListData = useProjects();
    const tasksListData = useTasks();

    function handleDrawerButtonClick() {

        setOpenDrawer(!isOpenDrawer);
    }
    
    return (

        <div className={styles.appLayout}>
            <Header onToggleDrawer={handleDrawerButtonClick} />

            <ProjectsContext value={projectsListData}>
                <Sidebar isOpenDrawer={isOpenDrawer} />
            </ProjectsContext>

            <Outlet />

            <Footer />
        </div>
    );
}

export default App;