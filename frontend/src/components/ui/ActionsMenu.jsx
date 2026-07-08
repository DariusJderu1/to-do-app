import { BsThreeDots } from "react-icons/bs";
import styles from "../../styles/ui/ActionsMenu.module.css";

function ActionsMenu({firstButtonText}) {

    return (

        <div>
            <button className={styles.menuButton}>
                <BsThreeDots aria-hidden="true" />
            </button>
            
            <div>
                <button>{firstButtonText}</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default ActionsMenu;