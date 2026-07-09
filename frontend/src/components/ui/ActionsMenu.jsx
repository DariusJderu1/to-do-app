import { useContext } from "react";
import ProjectsContext from "../app/context/ProjectsContext.jsx";
import { BsThreeDots } from "react-icons/bs";
import styles from "../../styles/ui/ActionsMenu.module.css";

async function deleteProject(url, projectId) {

    const completeUrl = url + "/" + projectId;
    const response = await fetch(completeUrl, {

        method: "DELETE"
    });

    if(!response.ok) {

        const errorData = await response.text();
        throw new Error(errorData);
    }

    const data = await response.text();
    
    return data;
}

function ActionsMenu({firstButtonText, currentProjectId, openMenuProjectId, setOpenMenuProjectId, toggleIsRenaming=null}) {
    
    // Hooks
    const projectListData = useContext(ProjectsContext);


    // Functions
    function handleOpenCloseMenuClick() {

        if(currentProjectId === openMenuProjectId)
            setOpenMenuProjectId(null);

        else
            setOpenMenuProjectId(currentProjectId);
    }

    async function handleDeleteProjectRequest() {

        try {

            const serverResponse = await deleteProject("http://localhost:8080/api/projects", currentProjectId);
            console.log(serverResponse);

            setOpenMenuProjectId(null);
            projectListData.actions.deleteProject(currentProjectId);

        } catch(error) {

            alert(error);
        }
    }


    // Returns
    return (

        <div 
            className={styles.actionsMenuWrapper}
            onClick={(e) => e.stopPropagation()}
        >
            <button 
                className={styles.menuButton} 
                aria-label="Open actions menu"
                onClick={handleOpenCloseMenuClick}
            >
                <BsThreeDots aria-hidden="true" />
            </button>
            
            {openMenuProjectId === currentProjectId ?
                (<div className={styles.actionsMenu}>
                    <button 
                        className={styles.actionButton}
                        onClick={toggleIsRenaming}
                    >
                        {firstButtonText}
                    </button>

                    <button 
                        className={`${styles.actionButton} ${styles.deleteButton}`}
                        onClick={handleDeleteProjectRequest}
                    >
                        Delete
                    </button>
                </div>) :
                null}
            
        </div>
    );
}

export default ActionsMenu;