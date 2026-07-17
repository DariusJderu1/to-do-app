import { useId } from "react";
import AddButton from "../ui/AddButton.jsx";
import CancelButton from "../ui/CancelButton.jsx";
import styles from "../../styles/tasks-page/TaskForm.module.css";
import { getPatchTodoApiResponseBody, getAddTaskApiResponseBody } from "../app/api/tasks.js";

function TaskForm({mode, openForm, handleOpenForm, taskListDataActions, taskData=null, projectId=null}) {

    // Hooks
    const formId = useId();


    // Variables
    const titleId = `${formId}-title`;
    const descriptionId = `${formId}-description`;
    const dateId = `${formId}-date`;


    // Functions
    async function handleTaskFormSubmit(e) {

        e.preventDefault();

        const form = e.target;
        const newTaskTitle = form.elements["title"].value;
        const newTaskDescription = form.elements["description"].value;
        const newTaskDate = form.elements["due-date"].value;
        const newTaskBody = {
            title: newTaskTitle,
            description: newTaskDescription,
            dueDate: newTaskDate
        };

        if(mode === "edit") {

            try {

                const serverResponse = await getPatchTodoApiResponseBody(taskData.id, newTaskBody);
                console.log("Project updated.", serverResponse);

                handleOpenForm(false);
                taskListDataActions.updateTaskStateChange(taskData.id, serverResponse);
                
            } catch(error) {

                alert(error);
            }

        } else {

            try {

                const serverResponse = await getAddTaskApiResponseBody({...newTaskBody, projectId: projectId});
                console.log("Project added.", serverResponse);

                handleOpenForm(false);
                taskListDataActions.addTaskStateChange(serverResponse);

            } catch(error) {

                alert(error);
            }
        }
    }


    // Returns 
    return (

        <form className={styles.taskForm} onSubmit={handleTaskFormSubmit}>
            <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor={titleId}>
                    Title:
                    <span className={styles.requiredMark} aria-hidden="true">*</span>
                </label>

                <input 
                    className={styles.formInput}
                    type="text" 
                    id={titleId}
                    name="title"
                    defaultValue={taskData ? taskData.title : ""}
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
                    name="description"
                    defaultValue={taskData ? taskData.description : ""}
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
                    name="due-date"
                    defaultValue={taskData ? taskData.dueDate : ""}
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