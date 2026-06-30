package com.darius.todoapp.dto;

// Used only for updates so we can avoid changing the owner
// (userId) of a Project in a PUT Request
public class ProjectUpdateRequest {

    // Fields
    private String name;

    // Constructors
    public ProjectUpdateRequest() {

    }

    public ProjectUpdateRequest(String name) {
        this.name = name;
    }


    // Setters and getters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
