import { FaRegStar, FaStar } from "react-icons/fa";
import ActionsMenu from "../../ui/ActionsMenu.jsx";
import styles from "../../../styles/tasks-page/task-list/TaskItem.module.css";

function TaskItem({taskData, openMenuTaskId, setOpenMenuTaskId}) {

    return (

        <li className={styles.taskItem}>
            <div className={styles.taskMainContent}>
                <input 
                    className={styles.taskCheckbox}
                    type="checkbox" 
                    value="true"
                    aria-label={`Mark ${taskData.title} as completed`}
                />

                <div className={styles.taskInformation}> 
                    <span className={styles.taskTitle}>{taskData.title}</span>

                    {taskData.description ?
                        <span className={styles.taskDescription}>{taskData.description}</span> :
                        null}
                </div>
            </div>

            <div>
                <span>{taskData.dueDate || "No due date"}</span>

                <span
                    className={`${styles.starIcon} ${
                        taskData.completed ? styles.inactiveStar : styles.activeStar
                    }`}
                >
                    {taskData.completed ? 
                    <FaRegStar /> :
                    <FaStar />}
                </span>

                <ActionsMenu 
                    currentId={taskData.id}
                    openMenuId={openMenuTaskId}
                    setOpenMenuId={setOpenMenuTaskId}
                />
            </div>
        </li>
    );
}

export default TaskItem;