import App from "./components/App.jsx";
import TasksPage from "./components/app/TasksPage.jsx";

const routes = [

    {
        path: "/",
        element: <App />,
        children: [
            
            {
                index: true,
                element: <TasksPage view="all" title="All Tasks" />
            },

            {
                path: "today",
                element: <TasksPage view="today" title="Today" />
            },

            {
                path: "next-seven-days",
                element: <TasksPage view="next-seven-days" title="Next 7 Days" />
            },

            {
                path: "important",
                element: <TasksPage view="important" title="Important" />
            },

            {
                path: "projects/:projectId",
                element: <TasksPage view="projects" />
            }
        ]
    }
];

export default routes;