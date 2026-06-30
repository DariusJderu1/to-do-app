package com.darius.todoapp.dto;

public class ProjectResponse {

    // Fields
    private Long id;
    private String name;
    private Long userId;
    private String username;


    // Constructors
    public ProjectResponse() {

    }

    public ProjectResponse(Long id, String name, Long userId, String username) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.username = username;
    }


    // Setters and getters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
