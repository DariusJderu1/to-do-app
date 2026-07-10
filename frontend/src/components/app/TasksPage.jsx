import TaskList from "../tasks-page/TaskList.jsx";

function TasksPage({view, title}) {

    return (

        <main>
            <h1>{title}</h1>

            <TaskList />
        </main>
    );
}

export default TasksPage;