import { useEffect, useReducer } from "react";

async function getApiResponseBody(url) {

    const response = await fetch(url, {

        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    if(!response.ok)
        throw new Error("There was an error in the API GET Request!");

    const data = await response.json();

    return data;
}

const initialState = {

    loading: true,
    error: null,
    taskList: []
};

function tasksReducer(currentState, action) {

    switch(action.type) {

        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: null,
                taskList: action.payload
            };

        case "FETCH_ERROR":
            return {
                loading: false,
                error: action.payload,
                taskList: []
            }

        default:
            return currentState;
    }
}

function useTasks() {

    // Hooks
    const [state, dispatch] = useReducer(tasksReducer, initialState);

    useEffect(() => {

        (async () => {

            try {

                const taskList = getApiResponseBody("http://localhost:8080/api/todos");
                dispatch({type: "FETCH_SUCCESS", payload: taskList});

            } catch(error) {

                dispatch({type: "FETCH_ERROR", payload: error.message});
            }

        })();

    }, []);

    return {

        state,
        actions: {

        }
    }
}

export default useTasks;