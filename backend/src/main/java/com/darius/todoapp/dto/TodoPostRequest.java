package com.darius.todoapp.dto;

import java.time.LocalDate;

public class TodoPostRequest {

    // Fields
    private String title;
    private String description;
    private LocalDate dueDate;
    private Long projectId;


    // Constructors
    public TodoPostRequest() {

    }

    public TodoPostRequest(String title, String description, LocalDate dueDate, Long projectId) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.projectId = projectId;
    }


    // Setters and getters
    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }
}
