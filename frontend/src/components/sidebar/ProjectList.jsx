import { useContext } from "react";
import ProjectItem from "./project-list/ProjectItem.jsx";
import ProjectsContext from "../app/context/ProjectsContext.jsx";

function ProjectList() {

    const projectsListData = useContext(ProjectsContext);

    const isLoading = projectsListData.loading;
    const errorMessage = projectsListData.error;
    const projectsList = projectsListData.projectList;

    
    if(isLoading)
        return null;

    if(errorMessage)
        return <span>{errorMessage}</span>;

    return (

        <ul>
            {projectsList.map(project => {

                return <ProjectItem key={project.id} projectData={project} />
            })}
        </ul>
    );
}

export default ProjectList;