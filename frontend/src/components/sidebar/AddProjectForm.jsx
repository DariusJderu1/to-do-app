import { FaArrowUpRightDots } from "react-icons/fa6";
import AddButton from "../ui/AddButton.jsx";
import CancelButton from "../ui/CancelButton.jsx";
import styles from "../../styles/sidebar/AddProjectForm.module.css";

function AddProjectForm({handleOpenForm, openForm}) {

    return (

        <div className={styles.addProjectForm}>
            <span className={styles.projectIcon} aria-hidden="true">
                <FaArrowUpRightDots />
            </span>

            <form className={styles.form}>
                <input 
                    className={styles.projectNameInput}
                    type="text" 
                    name="projectName"
                    placeholder="Enter Project Name"
                    aria-label="Project name"
                    autoComplete="off"
                    maxLength={50}
                    required
                    autoFocus
                />

                <div className={styles.formActions}>
                    <AddButton />
                    <CancelButton handleOpenForm={handleOpenForm} openForm={openForm} />
                </div>
            </form>
        </div>
    );
}

export default AddProjectForm;