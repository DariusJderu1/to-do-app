import { useContext } from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { getAddProjectApiResponseBody, getUpdateProjectApiResponseBody } from "../app/api/projects.js";
import AddButton from "../ui/AddButton.jsx";
import CancelButton from "../ui/CancelButton.jsx";
import ProjectsContext from "../app/context/ProjectsContext.jsx";
import styles from "../../styles/sidebar/AddProjectForm.module.css";

function ProjectForm({mode, projectData=null, openForm, handleOpenForm}) {

    // Hooks
    const projectListData = useContext(ProjectsContext);
    

    // Functions
    async function handleProjectFormSubmit(e) {

        e.preventDefault();

        const form = e.target;
        const newProjectName = form.elements["projectName"].value;

        if(mode === "add") {

            try {

                const serverResponse = await getAddProjectApiResponseBody(newProjectName);
                console.log("Project added.", serverResponse);

                handleOpenForm(!openForm);
                projectListData.actions.addNewProjectStateChange(serverResponse);

            } catch(error) {

                alert(error);
            }
        }
        
        else if(mode === "update") {

            try {

                const serverResponse = await getUpdateProjectApiResponseBody(projectData.id, newProjectName);
                console.log("Project updated.", serverResponse);

                handleOpenForm(!openForm);
                projectListData.actions.updateProjectStateChange(serverResponse);

            } catch(error) {

                alert(error);
            }
        }
    }


    // Returns
    return (

        <div className={styles.addProjectForm}>
            <span className={styles.projectIcon} aria-hidden="true">
                <FaArrowUpRightDots />
            </span>

            <form className={styles.form} onSubmit={handleProjectFormSubmit}>
                <input 
                    className={styles.projectNameInput}
                    type="text" 
                    name="projectName"
                    placeholder="Enter Project Name"
                    defaultValue={mode === "update" ? projectData.name : ""}
                    aria-label="Project name"
                    autoComplete="off"
                    maxLength={50}
                    required
                    autoFocus
                />

                <div className={styles.formActions}>
                    <AddButton text={mode === "add" ? "Add" : "Rename"} />
                    <CancelButton handleOpenForm={handleOpenForm} openForm={openForm} />
                </div>
            </form>
        </div>
    );
}

export default ProjectForm;