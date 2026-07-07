import styles from "../../styles/ui/ActionButton.module.css";

function CancelButton() {

    return (

        <button className={`${styles.actionButton} ${styles.cancelButton}`} type="button">
            Cancel
        </button>
    );
}

export default CancelButton;