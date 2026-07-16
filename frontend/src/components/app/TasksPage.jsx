import { useParams, useOutletContext } from "react-router";
import useTasks from "./hooks/useTasks.js";
import TaskList from "../tasks-page/TaskList.jsx";
import styles from "../../styles/app/TasksPage.module.css";

function TasksPage({view, title}) {

    // Hooks
    const taskListData = useTasks(view);
    const { projectId } = useParams();
    const projectListState = useOutletContext();


    // Variables
    const isLoading = projectListState.loading;
    const error = projectListState.error;
    const projectList = projectListState.projectList;

    if(view === "projects" && !isLoading && !error) {

        const currentProject = projectList.find(project => project.id === parseInt(projectId));
        title = currentProject.name;
    }


    // Returns
    return (

        <main className={styles.tasksPage}>
            <h1 className={styles.title}>
                {!isLoading ? 
                    (error ? error : title) :
                    null}
            </h1>
            
            <TaskList taskListData={taskListData} />
        </main>
    );
}

export default TasksPage;