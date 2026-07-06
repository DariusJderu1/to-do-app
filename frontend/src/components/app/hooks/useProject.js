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

const state = {

    loading: true,
    error: null,
    projectList: []
};

function projectsReducer(state, action) {

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
                projectList: action.value
            };

        case "FETCH_ERROR":
            return {
                loading: false,
                error: action.value,
                projectList: []
            };

        default:
            return state;
    }
}

function useProject() {

    const [state, dispatch] = useReducer(projectsReducer, state);

    useEffect(() => {

        (async () => {

            try {

                const projectList = await getApiResponseBody("http://localhost:8080/api/projects");

                dispatch(state, {type: "FETCH_SUCCESS", value: projectList});

            } catch(error) {

                dispatch(state, {type: "FETCH_ERROR", value: error.message});
            }

        })();
    });
}

export default useProject;