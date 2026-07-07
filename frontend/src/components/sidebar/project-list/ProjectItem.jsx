import { FaArrowUpRightDots } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
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

            <button className={styles.menuButton} aria-label={`Open options for ${projectData.name}`}>
                <BsThreeDots aria-hidden="true" />
            </button>
        </li>
    );
}

export default ProjectItem;