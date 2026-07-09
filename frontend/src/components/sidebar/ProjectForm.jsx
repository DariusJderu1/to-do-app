import { useContext } from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import AddButton from "../ui/AddButton.jsx";
import CancelButton from "../ui/CancelButton.jsx";
import ProjectsContext from "../app/context/ProjectsContext.jsx";
import styles from "../../styles/sidebar/AddProjectForm.module.css";

async function addProject(url, projectName) {

    const response = await fetch(url, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: projectName, userId: 1}),
    });

    if(!response.ok) {

        const errorData = await response.json();

        throw new Error(errorData.message);
    }
    
    const data = await response.json();

    return data;
}

async function updateProject(url, projectId, newProjectName) {

    const completeUrl = url + "/" + projectId;

    const response = await fetch(completeUrl, {

        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: newProjectName}),
    });

    if(!response.ok) {

        const errorData = await response.json();

        throw new Error(errorData.message);
    }

    const data = await response.json();

    return data;
}

function ProjectForm({mode, projectData=null, openForm, handleOpenForm}) {

    // Hooks
    const projectListData = useContext(ProjectsContext);
    

    // Functions
    async function handleAddProjectRequest(e) {

        e.preventDefault();

        const form = e.target;
        const newProjectName = form.elements["projectName"].value;

        if(mode === "add") {

            try {

                const serverResponse = await addProject("http://localhost:8080/api/projects", newProjectName);
                console.log("Project added.", serverResponse);

                handleOpenForm(!openForm);
                projectListData.actions.addNewProject(serverResponse);

            } catch(error) {

                alert(error);
            }
        }
        
        else if(mode === "update") {

            try {

                const serverResponse = await updateProject("http://localhost:8080/api/projects", projectData.id, newProjectName);
                console.log("Project updated.". serverResponse);

                handleOpenForm(!openForm);
                projectListData.actions.updateProject(serverResponse);

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

            <form className={styles.form} onSubmit={handleAddProjectRequest}>
                <input 
                    className={styles.projectNameInput}
                    type="text" 
                    name="projectName"
                    placeholder="Enter Project Name"
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