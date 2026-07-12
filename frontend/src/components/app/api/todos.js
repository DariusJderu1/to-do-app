export async function getPatchTodoApiResponseBody(todoId, updatedTodoPatchBody) {

    const completeUrl = "http://localhost:8080/api/todos" + "/" + todoId;

    const response = await fetch(completeUrl, {

        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodoPatchBody)
    });

    if(!response.ok) {

        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json();

    return data;
}