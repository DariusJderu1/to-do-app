import { FaRegStar, FaStar } from "react-icons/fa";
import ActionsMenu from "../../ui/ActionsMenu.jsx";

function TaskItem({taskData, openMenuTaskId, setOpenMenuTaskId}) {

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
                        currentId={taskData.id}
                        openMenuId={openMenuTaskId}
                        setOpenMenuId={setOpenMenuTaskId}
                    />
                </div>
            </div>
        </li>
    );
}

export default TaskItem;