package com.darius.todoapp.dto;

import java.time.LocalDate;

public class TodoResponse {

    // Fields
    private Long id;
    private String title;
    private String description;
    private LocalDate dueDate;
    private boolean completed;
    private boolean important;
    private Long projectId;
    private String projectName;


    // Constructors
    public TodoResponse() {

    }

    public TodoResponse(Long id, String title, String description, LocalDate dueDate, boolean completed, boolean important, Long projectId, String projectName) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
        this.important = important;
        this.projectId = projectId;
        this.projectName = projectName;
    }


    // Setters and getters

    public void setId(Long id) {
        this.id = id;
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

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public Long getId() {
        return id;
    }

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

    public String getProjectName() {
        return projectName;
    }
}
