import { BsThreeDots } from "react-icons/bs";
import styles from "../../styles/ui/ActionsMenu.module.css";

function ActionsMenu({firstButtonText="Edit", currentId, openMenuId, setOpenMenuId, toggleIsEditing=null, onDelete}) {

    // Functions
    function handleOpenCloseMenuClick() {

        if(currentId === openMenuId)
            setOpenMenuId(null);

        else
            setOpenMenuId(currentId);
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
                        onClick={toggleIsEditing}
                    >
                        {firstButtonText}
                    </button>

                    <button 
                        className={`${styles.actionButton} ${styles.deleteButton}`}
                        onClick={() => onDelete(currentId)}
                    >
                        Delete
                    </button>
                </div>) :
                null}
            
        </div>
    );
}

export default ActionsMenu;