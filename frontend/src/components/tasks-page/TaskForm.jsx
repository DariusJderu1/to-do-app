import { useId } from "react";
import AddButton from "../ui/AddButton.jsx";
import CancelButton from "../ui/CancelButton.jsx";
import styles from "../../styles/tasks-page/TaskForm.module.css";

function TaskForm({mode, openForm, handleOpenForm}) {

    // Hooks
    const formId = useId();


    // Variables
    const titleId = `${formId}-title`;
    const descriptionId = `${formId}-description`;
    const dateId = `${formId}-date`;


    // Returns 
    return (

        <form className={styles.taskForm}>
            <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor={titleId}>
                    Title:
                    <span className={styles.requiredMark} aria-hidden="true">*</span>
                </label>

                <input 
                    className={styles.formInput}
                    type="text" 
                    id={titleId}
                    placeholder="What needs to be done?"
                    maxLength={100}
                    required
                    autoFocus
                />
            </div>

            <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor={descriptionId}>
                    Description
                    <span className={styles.optionalText}>Optional</span>
                </label>

                <textarea
                    className={`${styles.formInput} ${styles.descriptionInput}`}
                    id={descriptionId}
                    placeholder="Add a few details about this task..."
                    rows={3}
                    maxLength={500}
                ></textarea>
            </div>

            <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor={dateId}>
                    Due date
                    <span className={styles.optionalText}>Optional</span>
                </label>

                <input 
                    className={styles.formInput}
                    type="date" 
                    id={dateId}
                />
            </div>

            <div className={styles.formActions}>
                <AddButton text={mode === "add" ? "Add" : "Save"} />

                <CancelButton openForm={openForm} handleOpenForm={handleOpenForm} />
            </div>
        </form>
    );
}

export default TaskForm;