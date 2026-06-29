package com.darius.todoapp.dto;

import java.time.LocalDate;

public class TodoPatchRequest {

    // Fields
    private String title;
    private String description;
    private LocalDate dueDate;
    private Boolean completed;
    private Boolean important;
    private Long projectId;


    // Constructors
    public TodoPatchRequest() {

    }

    public TodoPatchRequest(String title, String description, LocalDate dueDate, Boolean completed, Boolean important, Long projectId) {
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

    public Boolean getCompleted() {
        return completed;
    }

    public Boolean getImportant() {
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

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public void setImportant(Boolean important) {
        this.important = important;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }
}
