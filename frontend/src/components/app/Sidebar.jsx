import { FaPlus } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

function Sidebar() {

    return (

        <aside>
            <span>Home</span>

            <a href="#">All Tasks</a>

            <a href="#">Today</a>

            <a href="#">Next 7 Days</a>

            <a href="#">Important</a>

            <span>Projects</span>

            <span><FaPlus /></span>
        </aside>
    );
}

export default Sidebar;