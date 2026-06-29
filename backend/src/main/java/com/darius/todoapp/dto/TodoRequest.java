package com.darius.todoapp.dto;

import java.time.LocalDate;

public class TodoRequest {

    // Fields
    private String title;

    private String description;

    private LocalDate dueDate;

    private boolean completed;

    private boolean important;

    private Long projectId;


    // Constructors
    public TodoRequest() {

    }

    public TodoRequest(String title, String description, LocalDate dueDate, boolean completed, boolean important, Long projectId) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
        this.important = important;
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

    public boolean isCompleted() {
        return completed;
    }

    public boolean isImportant() {
        return important;
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

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public void setImportant(boolean important) {
        this.important = important;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }
}
