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

function ActionsMenu({firstButtonText="Edit", currentId, openMenuId, setOpenMenuId, toggleIsRenaming=null}) {
    
    // Hooks
    const projectListData = useContext(ProjectsContext);


    // Functions
    function handleOpenCloseMenuClick() {

        if(currentId === openMenuId)
            setOpenMenuId(null);

        else
            setOpenMenuId(currentId);
    }

    async function handleDeleteProjectRequest() {

        try {

            const serverResponse = await deleteProject("http://localhost:8080/api/projects", currentId);
            console.log(serverResponse);

            setOpenMenuId(null);
            projectListData.actions.deleteProject(currentId);

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
            
            {openMenuId === currentId ?
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