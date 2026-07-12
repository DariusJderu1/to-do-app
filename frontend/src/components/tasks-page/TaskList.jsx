import { useState, useEffect } from "react";
import TaskItem from "./task-list/TaskItem.jsx";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getPatchTodoApiResponseBody } from "../app/api/todos.js";
import styles from "../../styles/tasks-page/TaskList.module.css";

function TaskList({taskListData}) {

    // Hooks
    const [openMenuTaskId, setOpenMenuTaskId] = useState(null);


    // Functions
    async function handleEditTask(taskId, updatedTaskPatchBody) {

        try {

            const serverResponse = await getPatchTodoApiResponseBody(taskId, updatedTaskPatchBody);
            console.log("Updated todo " + taskId, serverResponse);

            taskListData.actions.updateTaskStateChange(taskId, serverResponse);

        } catch(error) {

            alert(error);
        }
    }

    useEffect(() => {

        const handleCloseMenu = () => setOpenMenuTaskId(null);

        document.addEventListener("click", handleCloseMenu);

        return () => document.removeEventListener("click", handleCloseMenu);

    }, []);


    // Returns
    if(taskListData.state.loading) {

        return (

            <Box className={styles.loadingContainer}>
                <CircularProgress className={styles.loadingSpinner} aria-label="Loading…" />
            </Box>
        );
    }

    if(taskListData.state.error) {

        return (

            <p className={styles.errorMessage}>
                {taskListData.state.error}
            </p>
        );
    }

    return (

        <ul className={styles.taskList}>
            {taskListData.state.taskList.map(task => {
                return <TaskItem 
                            key={task.id} 
                            taskData={task}
                            openMenuTaskId={openMenuTaskId}
                            setOpenMenuTaskId={setOpenMenuTaskId}
                            handleEditTask={handleEditTask}
                        />
            })}
        </ul>
    );
}

export default TaskList;