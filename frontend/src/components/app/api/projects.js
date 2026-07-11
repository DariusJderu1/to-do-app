export async function getDeleteProjectApiResponseBody(projectId) {

    const completeUrl = "http://localhost:8080/api/projects" + "/" + projectId;
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