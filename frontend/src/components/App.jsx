import { useState } from "react";
import Header from "./app/Header.jsx";
import Sidebar from "./app/Sidebar.jsx";
import styles from "../styles/App.module.css";

function App() {

    const [isOpenDrawer, setOpenDrawer] = useState(false);

    function handleDrawerButtonClick() {

        setOpenDrawer(!isOpenDrawer);
    }
    
    return (

        <div className={styles.appLayout}>
            <Header onToggleDrawer={handleDrawerButtonClick} />

            <Sidebar isOpenDrawer={isOpenDrawer} />
        </div>
    );
}

export default App;