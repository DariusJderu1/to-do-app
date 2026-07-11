import { useState } from "react";
import TaskItem from "./task-list/TaskItem.jsx";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function TaskList({taskListState}) {

    const [openMenuTaskId, setOpenMenuTaskId] = useState(null);

    // Returns
    if(taskListState.loading) {

        return (

            <Box sx={{ display: 'flex' }}>
                <CircularProgress aria-label="Loading…" />
            </Box>
        );
    }

    if(taskListState.error) {

        return <p>{taskListState.error}</p>
    }

    return (

        <ul>
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