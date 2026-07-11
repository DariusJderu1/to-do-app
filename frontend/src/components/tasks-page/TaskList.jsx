import { useState, useEffect } from "react";
import TaskItem from "./task-list/TaskItem.jsx";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from "../../styles/tasks-page/TaskList.module.css";

function TaskList({taskListState}) {

    // Hooks
    const [openMenuTaskId, setOpenMenuTaskId] = useState(null);


    // Functions
    useEffect(() => {

        const handleCloseMenu = () => setOpenMenuTaskId(null);

        document.addEventListener("click", handleCloseMenu);

        return () => document.removeEventListener("click", handleCloseMenu);

    }, []);


    // Returns
    if(taskListState.loading) {

        return (

            <Box className={styles.loadingContainer}>
                <CircularProgress className={styles.loadingSpinner} aria-label="Loading…" />
            </Box>
        );
    }

    if(taskListState.error) {

        return (

            <p className={styles.errorMessage}>
                {taskListState.error}
            </p>
        );
    }

    return (

        <ul className={styles.taskList}>
            {taskListState.taskList.map(task => {
                return <TaskItem 
                            key={task.id} 
                            taskData={task}
                            openMenuTaskId={openMenuTaskId}
                            setOpenMenuTaskId={setOpenMenuTaskId}
                        />
            })}
        </ul>
    );
}

export default TaskList;