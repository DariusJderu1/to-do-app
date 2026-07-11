import { useOutletContext } from "react-router";
import TaskList from "../tasks-page/TaskList.jsx";
import styles from "../../styles/app/TasksPage.module.css";

function TasksPage({view, title}) {

    // Hooks
    const taskListData = useOutletContext();

    return (

        <main className={styles.tasksPage}>
            <h1 className={styles.title}>{title}</h1>

            {taskListData.state.taskList.length === 0 ?
                null :
                <TaskList taskListState={taskListData.state} />}
        </main>
    );
}

export default TasksPage;