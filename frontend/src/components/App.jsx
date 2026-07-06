import { useState } from "react";
import useProjects from "./app/hooks/useProjects.js";
import Header from "./app/Header.jsx";
import Sidebar from "./app/Sidebar.jsx";
import Footer from "./app/Footer.jsx";
import styles from "../styles/App.module.css";

function App() {

    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const projectsListData = useProjects();

    function handleDrawerButtonClick() {

        setOpenDrawer(!isOpenDrawer);
    }
    
    return (

        <div className={styles.appLayout}>
            <Header onToggleDrawer={handleDrawerButtonClick} />

            <Sidebar isOpenDrawer={isOpenDrawer} />

            <Footer />
        </div>
    );
}

export default App;