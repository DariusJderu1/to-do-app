import { useState } from "react";
import Header from "./app/Header.jsx";
import Sidebar from "./app/Sidebar.jsx";
import Footer from "./app/Footer.jsx";
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

            <Footer />
        </div>
    );
}

export default App;