package com.darius.todoapp.dto;

public class ProjectResponse {

    // Fields
    private int id;
    private String name;
    private int userId;
    private String userName;


    // Constructors
    public ProjectResponse() {

    }

    public ProjectResponse(int id, String name, int userId, String userName) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.userName = userName;
    }


    // Setters and getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
