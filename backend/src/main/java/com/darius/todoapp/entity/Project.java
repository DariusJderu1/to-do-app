package com.darius.todoapp.entity;

import jakarta.persistence.*;

@Entity
@Table(name="projects")
public class Project {

    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;


    // Constructors
    public Project() {

    }

    public Project(String name, User user) {

        this.name = name;
        this.user = user;
    }


    // Setters and getters
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public User getUser() {
        return user;
    }


    // toString
    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", userId=" + user.getId() +
                '}';
    }
}
