import { FaPlus } from "react-icons/fa6";
import styles from "../../styles/ui/AddProjectTaskButton.module.css";

function AddProjectButton({content}) {

    return (

        <button className={styles.addProjectButton}> 
            <span className={styles.buttonContent}>
                <FaPlus aria-hidden="true" />
                <span>{content}</span>
            </span>
        </button>
    );
}

export default AddProjectButton;