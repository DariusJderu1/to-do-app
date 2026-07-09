import styles from "../../styles/ui/ActionButton.module.css";

function AddButton({text}) {

    return (

        <button 
            className={`${styles.actionButton} ${styles.addButton}`} 
            type="submit"
        >
            {text}
        </button>
    );
}

export default AddButton;