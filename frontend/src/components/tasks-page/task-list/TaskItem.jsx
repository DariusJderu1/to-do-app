import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import ActionsMenu from "../../ui/ActionsMenu.jsx";
import TaskForm from "../TaskForm.jsx";
import styles from "../../../styles/tasks-page/task-list/TaskItem.module.css";

function TaskItem({taskData, taskListDataActions, openMenuTaskId, setOpenMenuTaskId, handleEditTask, handleDeleteTask}) {

    // Hooks
    const [isEditing, setIsEditing] = useState(false);


    // Functions
    function toggleIsEditing() {

        setIsEditing(!isEditing);
        setOpenMenuTaskId(null);
    }


    // Returns
    if(!isEditing) {

        return (

            <li className={styles.taskItem}>
                <div className={styles.taskMainContent}>
                    <input 
                        className={styles.taskCheckbox}
                        type="checkbox" 
                        checked={Boolean(taskData.completed)}
                        aria-label={`Mark ${taskData.title} as completed`}
                        onChange={(e) => handleEditTask(taskData.id, {completed: e.target.checked})}
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
                        className={`${styles.starIcon} ${taskData.important ? styles.activeStar : styles.inactiveStar}`}
                        onClick={() => handleEditTask(taskData.id, {important: !taskData.important})}
                    >
                        {taskData.important ? 
                            <FaStar /> :
                            <FaRegStar />}
                    </span>

                    <ActionsMenu 
                        currentId={taskData.id}
                        openMenuId={openMenuTaskId}
                        setOpenMenuId={setOpenMenuTaskId}
                        toggleIsEditing={toggleIsEditing}
                        onDelete={handleDeleteTask}
                    />
                </div>
            </li>
        );
    }

    else {

        return (

            <li>
                <TaskForm 
                    mode="edit" 
                    openForm={isEditing}
                    handleOpenForm={setIsEditing}
                    taskData={taskData}
                    taskListDataActions={taskListDataActions}
                />
            </li>
        );
    }
}

export default TaskItem;