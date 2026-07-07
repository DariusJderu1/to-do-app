import styles from "../../styles/ui/ActionButton.module.css";

function AddButton() {

    return (

        <button 
            className={`${styles.actionButton} ${styles.addButton}`} 
            type="submit"
        >
            Add
        </button>
    );
}

export default AddButton;