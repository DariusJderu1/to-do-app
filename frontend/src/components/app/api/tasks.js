export async function getPostTodoApiResponseBody(newTask) {

    const completeUrl = "http://localhost:8080/api/todos";

    const response = await fetch(completeUrl, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask)
    });

    if(!response.ok) {

        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json();
    return data;
}

export async function getPatchTodoApiResponseBody(taskId, updatedTaskPatchBody) {

    const completeUrl = "http://localhost:8080/api/todos" + "/" + taskId;

    const response = await fetch(completeUrl, {

        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTaskPatchBody)
    });

    if(!response.ok) {

        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json();

    return data;
}

export async function getDeleteTodoApiResponseBody(taskId) {

    const completeUrl = "http://localhost:8080/api/todos" + "/" + taskId;

    const response = await fetch(completeUrl, {

        method: "DELETE"
    });

    if(!response.ok) {

        const errorData = await response.text();
        throw new Error(errorData);
    }

    const data = await response.text();
    return data;
}