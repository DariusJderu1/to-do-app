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

function ProjectForm({handleOpenForm, openForm}) {

    const projectListData = useContext(ProjectsContext);
    

    async function handleAddProjectRequest(e) {

        e.preventDefault();

        const form = e.target;
        const projectName = form.elements["projectName"].value;

        try {

            const serverResponse = await addProject("http://localhost:8080/api/projects", projectName);
            console.log("Project added.", serverResponse);

            handleOpenForm(!openForm);
            projectListData.actions.addNewProject(serverResponse);

        } catch(error) {

            alert(error);
        }
    }

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
                    <AddButton text={"Add"}/>
                    <CancelButton handleOpenForm={handleOpenForm} openForm={openForm} />
                </div>
            </form>
        </div>
    );
}

export default ProjectForm;