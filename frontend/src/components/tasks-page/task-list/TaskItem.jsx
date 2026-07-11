import { FaRegStar, FaStar } from "react-icons/fa";
import ActionsMenu from "../../ui/ActionsMenu.jsx";

function TaskItem({taskData, }) {

    return (

        <li>
            <input type="checkbox" value="true"/>

            <div>
                <div>
                    <span>{taskData.dueDate}</span>

                    {taskData.completed ? 
                        <FaRegStar /> :
                        <FaStar />}

                    <ActionsMenu 
                        currentProjectId={taskData.id}
                    />
                </div>
            </div>
        </li>
    );
}

export default TaskItem;