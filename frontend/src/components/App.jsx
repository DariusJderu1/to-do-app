import Header from "./app/Header.jsx";
import Sidebar from "./app/Sidebar.jsx";
import styles from "../styles/App.module.css";

function App() {
    
    return (

        <div className={styles.appLayout}>
            <Header />

            <Sidebar />
        </div>
    );
}

export default App;