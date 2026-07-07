import styles from "../../styles/ui/ActionButton.module.css";

function AddButton({handleOpenForm, openForm, handleRequest}) {

    function handleOnClick() {

        handleRequest();

        handleOpenForm(!openForm);
    }

    return (

        <button 
            className={`${styles.actionButton} ${styles.addButton}`} 
            type="submit"
            onClick={handleOnClick}
        >
            Add
        </button>
    );
}

export default AddButton;