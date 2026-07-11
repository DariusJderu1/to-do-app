export async function getAddProjectApiResponseBody(projectName) {

    const response = await fetch("http://localhost:8080/api/projects", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: projectName, userId: 1}),
    });

    if(!response.ok) {

        const errorData = await response.json();

        throw new Error(errorData.message);
    }
    
    const data = await response.json();

    return data;
}

export async function getUpdateProjectApiResponseBody(projectId, newProjectName) {

    const completeUrl = "http://localhost:8080/api/projects" + "/" + projectId;

    const response = await fetch(completeUrl, {

        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: newProjectName}),
    });

    if(!response.ok) {

        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json();

    return data;
}

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