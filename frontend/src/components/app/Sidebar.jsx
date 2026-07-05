import ProjectList from "../sidebar/ProjectList.jsx";
import AddProjectButton from "../sidebar/AddProjectButton.jsx";

function Sidebar() {

    return (

        <aside>
            <span>Home</span>

            <a href="#">
                <span aria-hidden="true">📋</span>
                <span>All Tasks</span>
            </a>

            <a href="#">
                <span aria-hidden="true">📅</span>
                <span>Today</span>
            </a>

            <a href="#">
                <span aria-hidden="true">🗓️</span>
                <span>Next 7 Days</span>
            </a>

            <a href="#">
                <span aria-hidden="true">⭐</span>
                <span>Important</span>
            </a>

            <span>Projects</span>

            <ProjectList />
            
            <AddProjectButton />
        </aside>
    );
}

export default Sidebar;