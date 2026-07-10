import App from "./components/App.jsx";
import TasksPage from "./components/app/TasksPage.jsx";

const routes = [

    {
        path: "/",
        element: <App />,
        children: [
            
            {
                index: true,
                element: <TasksPage />
            }
        ]
    }
];

export default routes;