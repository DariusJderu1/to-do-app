package com.darius.todoapp.dto;

public class ProjectRequest {

    // Fields
    private String name;
    private Long userId;


    // Constructors
    public ProjectRequest() {

    }

    public ProjectRequest(String name, Long userId) {
        this.name = name;
        this.userId = userId;
    }


    // Setters and getters
    public String getName() {
        return name;
    }

    public Long getUserId() {
        return userId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
