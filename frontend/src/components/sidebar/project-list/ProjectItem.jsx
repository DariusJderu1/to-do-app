import { useState } from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import ActionsMenu from "../../ui/ActionsMenu.jsx";
import ProjectForm from "../ProjectForm.jsx";
import styles from "../../../styles/sidebar/project-list/ProjectItem.module.css";

function ProjectItem({projectData, openMenuId, setOpenMenuId, onDelete}) {

    // Hooks
    const [isRenaming, setIsRenaming] = useState(false);


    // Functions
    function toggleIsRenaming() {

        setIsRenaming(true);
        setOpenMenuId(null);
    }


    // Returns
    if(!isRenaming) {
        return (

            <li className={styles.projectItem}>
                <div className={styles.projectInformation}>
                    <span className={styles.projectIcon} aria-hidden="true">
                        <FaArrowUpRightDots />
                    </span>

                    <span className={styles.projectName}>
                        {projectData.name}
                    </span>
                </div>

                <ActionsMenu 
                    firstButtonText={"Rename"} 
                    currentId={projectData.id}
                    openMenuId={openMenuId} 
                    setOpenMenuId={setOpenMenuId}
                    toggleIsEditing={toggleIsRenaming}
                    onDelete={onDelete}
                />
            </li>
        );
    }

    else {
        return (

            <ProjectForm 
                mode={"update"} 
                projectData={projectData}
                openForm={isRenaming}
                handleOpenForm={setIsRenaming}
            />
        );
    }
    
}

export default ProjectItem;