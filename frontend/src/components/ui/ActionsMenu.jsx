import { BsThreeDots } from "react-icons/bs";
import styles from "../../styles/ui/ActionsMenu.module.css";

function ActionsMenu({firstButtonText, isOpenMenu}) {

    return (

        <div className={styles.actionsMenuWrapper}>
            <button className={styles.menuButton} aria-label="Open acitons menu">
                <BsThreeDots aria-hidden="true" />
            </button>
            
            {isOpenMenu ?
                (<div className={styles.actionsMenu}>
                    <button className={styles.actionButton}>{firstButtonText}</button>
                    <button className={`${styles.actionButton} ${styles.deleteButton}`}>Delete</button>
                </div>) :
                null}
            
        </div>
    );
}

export default ActionsMenu;