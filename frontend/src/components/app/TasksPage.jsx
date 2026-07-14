import useTasks from "./hooks/useTasks.js";
import TaskList from "../tasks-page/TaskList.jsx";
import styles from "../../styles/app/TasksPage.module.css";

function TasksPage({view, title}) {

    // Hooks
    const taskListData = useTasks(view);

    return (

        <main className={styles.tasksPage}>
            <h1 className={styles.title}>{title}</h1>
            
            <TaskList taskListData={taskListData} />
        </main>
    );
}

export default TasksPage;