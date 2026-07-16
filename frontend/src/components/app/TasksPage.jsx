import { useParams, useOutletContext } from "react-router";
import { useState } from "react";
import useTasks from "./hooks/useTasks.js";
import TaskList from "../tasks-page/TaskList.jsx";
import AddProjectTaskButton from "../ui/AddProjectTaskButton.jsx";
import TaskForm from "../tasks-page/TaskForm.jsx";
import styles from "../../styles/app/TasksPage.module.css";

function TasksPage({view, title}) {

    // Hooks
    const { projectId } = useParams();
    const taskListData = useTasks(view, parseInt(projectId));
    const projectListState = useOutletContext();
    const [openForm, setOpenForm] = useState(false);


    // Variables
    const isLoading = projectListState.loading;
    const error = projectListState.error;
    const projectList = projectListState.projectList;

    if(view === "projects" && !isLoading && !error) {

        const currentProject = projectList.find(project => project.id === parseInt(projectId));

        if(!currentProject) {

            return (

                <main className={styles.tasksPage}>
                    <h1 className={styles.title}>No project with the Id {projectId}</h1>
                </main>
            );
        }

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

            {view === "projects" ? 
                (openForm ? 
                    <TaskForm 
                        mode="add"
                        openForm={openForm}
                        handleOpenForm={setOpenForm} 
                    /> :
                    <AddProjectTaskButton 
                        text="Add Task"
                        openForm={openForm}
                        handleOpenForm={setOpenForm}
                    />) :
                null}
        </main>
    );
}

export default TasksPage;