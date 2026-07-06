import { FaArrowUpRightDots } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

function ProjectItem({projectData}) {

    return (

        <li>
            <div>
                <span><FaArrowUpRightDots /></span>
                <span>{projectData.name}</span>
            </div>

            <span><BsThreeDots /></span>
        </li>
    );
}

export default ProjectItem;