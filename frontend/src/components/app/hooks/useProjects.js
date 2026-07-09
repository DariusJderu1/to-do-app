import { useReducer, useEffect } from "react";

async function getApiResponseBody(url) {

    const response = await fetch(url, {

        method: "GET",
        headers: {

            Accept: "application/json"
        }
    });

    if(!response.ok)
        throw new Error("There was an error in the API call!");

    const data = await response.json();
    
    return data;
}

const initialState = {

    loading: true,
    error: null,
    projectList: []
};

function projectsReducer(currentState, action) {

    switch(action.type) {

        case "FETCH_START":
            return {
                loading: true,
                error: null,
                projectList: []
            };

        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: null,
                projectList: action.payload
            };

        case "FETCH_ERROR":
            return {
                loading: false,
                error: action.payload,
                projectList: []
            };

        case "ADD_NEW_PROJECT":
            return {
                loading: false,
                error: null,
                projectList: [...currentState.projectList, action.payload]
            }

        case "DELETE_PROJECT":
            return {
                loading: false,
                error: null,
                projectList: currentState.projectList.filter(project => project.id !== action.payload)
            }

        default:
            return currentState;
    }
}

function useProjects() {

    // Hooks
    const [state, dispatch] = useReducer(projectsReducer, initialState);

    // Functions
    const addNewProject = (newProject) => dispatch({type: "ADD_NEW_PROJECT", payload: newProject});

    const deleteProject = (projectId) => dispatch({type: "DELETE_PROJECT", payload: projectId});
    


    useEffect(() => {

        (async () => {

            try {

                const projectList = await getApiResponseBody("http://localhost:8080/api/projects");

                dispatch({type: "FETCH_SUCCESS", payload: projectList});

            } catch(error) {

                dispatch({type: "FETCH_ERROR", payload: error.message});
            }

        })();

    }, []);

    return {
        state,
        actions: {
            addNewProject,
            deleteProject
        }
    }
}

export default useProjects;