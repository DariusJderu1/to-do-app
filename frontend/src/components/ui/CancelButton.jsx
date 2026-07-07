import styles from "../../styles/ui/ActionButton.module.css";

function CancelButton({handleOpenForm, openForm}) {

    return (

        <button 
            className={`${styles.actionButton} ${styles.cancelButton}`} 
            type="button"
            onClick={() => handleOpenForm(!openForm)}
        >
            Cancel
        </button>
    );
}

export default CancelButton;