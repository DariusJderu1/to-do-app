import { useOutletContext } from "react-router";
import TaskList from "../tasks-page/TaskList.jsx";

function TasksPage({view, title}) {

    // Hooks
    const taskListData = useOutletContext();

    return (

        <main>
            <h1>{title}</h1>

            <TaskList taskListState={taskListData.state} />
        </main>
    );
}

export default TasksPage;