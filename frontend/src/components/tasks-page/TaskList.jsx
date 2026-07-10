import TaskItem from "./task-list/TaskItem.jsx";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function TaskList({taskListState}) {

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
                return <TaskItem key={task.id} taskData={task} />
            })}
        </ul>
    );
}

export default TaskList;