package com.darius.todoapp.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

// This class is mapped to a DB table - an entity class
@Entity
@Table(name="todos")
public class Todo {

    // Define the fields

    // this field is the PK of the table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="due_date")
    private LocalDate dueDate;

    @Column(name="completed")
    private boolean completed;

    @Column(name="important")
    private boolean important;

    // More todos can belong to a single user
    @ManyToOne
    // Used instead of @Column because it is not a simple column.
    // It represents the relationship to the User entity, and the column
    // that makes this relationship possible in the DB is "user_id"
    @JoinColumn(name="user_id")
    private User user;


    // Define the constructors
    public Todo() {

    }

    public Todo(String title, String description, LocalDate dueDate, boolean completed, boolean important, User user) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
        this.important = important;
        this.user = user;
    }


    // Define the setters and getters
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

    public User getUser() {
        return user;
    }

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

    public void setUser(User user) {
        this.user = user;
    }


    // define toString

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", dueDate=" + dueDate +
                ", completed=" + completed +
                ", important=" + important +
                ", userId=" + user.getId() +
                '}';
    }
}
