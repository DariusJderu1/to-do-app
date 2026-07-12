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

        case "UPDATE_TASK":
            return {
                loading: false,
                error: null,
                taskList: currentState.taskList.map(task => task.id === action.payload.taskId ? action.payload.updatedTask : task)
            }

        default:
            return currentState;
    }
}

function useTasks() {

    // Hooks
    const [state, dispatch] = useReducer(tasksReducer, initialState);


    // Functions
    const updateTaskStateChange = (taskId, updatedTask) => dispatch({type: "UPDATE_TASK", payload: {taskId, updatedTask}})

    useEffect(() => {

        (async () => {

            try {

                const taskList = await getApiResponseBody("http://localhost:8080/api/todos");
                dispatch({type: "FETCH_SUCCESS", payload: taskList});

            } catch(error) {

                dispatch({type: "FETCH_ERROR", payload: error.message});
            }

        })();

    }, []);

    return {

        state,
        actions: {
            updateTaskStateChange,
        }
    }
}

export default useTasks;