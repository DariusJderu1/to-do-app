import { FaPlus } from "react-icons/fa6";
import styles from "../../styles/sidebar/AddProjectButton.module.css";

function AddProjectButton() {

    return (

        <button className={styles.addProjectButton}> 
            <span className={styles.buttonContent}>
                <FaPlus aria-hidden="true" />
                <span>Add Project</span>
            </span>
        </button>
    );
}

export default AddProjectButton;