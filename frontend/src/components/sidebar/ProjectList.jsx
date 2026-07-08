import { useContext, useEffect, useState } from "react";
import ProjectItem from "./project-list/ProjectItem.jsx";
import ProjectsContext from "../app/context/ProjectsContext.jsx";
import styles from "../../styles/sidebar/ProjectList.module.css";

function ProjectList() {
    
    // Hooks
    const [openMenuProjectId, setOpenMenuProjectId] = useState(null);


    const projectsListData = useContext(ProjectsContext);
    const currentState = projectsListData.state;

    const isLoading = currentState.loading;
    const errorMessage = currentState.error;
    const projectsList = currentState.projectList;

    // function handleOpenMenu() {

    //     if(openMenu)
    //         setOpenMenu(false);
    // }

    // useEffect(() => {

    //     document.addEventListener("click", handleOpenMenu);

    //     return () => document.removeEventListener("click", handleOpenMenu);

    // }, []);

    
    // Component returns
    if(isLoading)
        return null;

    if(errorMessage) {

        return (

            <span className={`${styles.statusMessage} ${styles.errorMessage}`} role="alert">
                {errorMessage}
            </span>
        );
    }

    if(projectsList.length === 0) {

        return (

            <span className={styles.statusMessage}>
                No projects yet.
            </span>
        );
    }

    return (

        <ul className={styles.projectList}>
            {projectsList.map(project => {

                return <ProjectItem 
                            key={project.id} 
                            projectData={project} 
                            openMenuProjectId={openMenuProjectId}
                            setOpenMenuProjectId={setOpenMenuProjectId}
                        />
            })}
        </ul>
    );
}

export default ProjectList;