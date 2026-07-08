import { FaArrowUpRightDots } from "react-icons/fa6";
import ActionsMenu from "../../ui/ActionsMenu.jsx";
import styles from "../../../styles/sidebar/project-list/ProjectItem.module.css";

function ProjectItem({projectData}) {

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

            <ActionsMenu firstButtonText={"Rename"}/>
        </li>
    );
}

export default ProjectItem;