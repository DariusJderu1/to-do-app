import ProjectList from "../sidebar/ProjectList.jsx";
import AddProjectButton from "../sidebar/AddProjectButton.jsx";

function Sidebar() {

    return (

        <aside>
            <span>Home</span>
            <a href="#">All Tasks</a>
            <a href="#">Today</a>
            <a href="#">Next 7 Days</a>
            <a href="#">Important</a>

            <span>Projects</span>

            <ProjectList />
            <AddProjectButton />
        </aside>
    );
}

export default Sidebar;