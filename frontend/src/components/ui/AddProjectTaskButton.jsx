import { FaPlus } from "react-icons/fa6";
import styles from "../../styles/ui/AddProjectTaskButton.module.css";

function AddProjectButton({text, handleOpenForm, openForm}) {

    return (

        <button className={styles.addProjectButton} onClick={() => handleOpenForm(!openForm)} > 
            <span className={styles.buttonContent}>
                <FaPlus aria-hidden="true" />
                <span>{text}</span>
            </span>
        </button>
    );
}

export default AddProjectButton;