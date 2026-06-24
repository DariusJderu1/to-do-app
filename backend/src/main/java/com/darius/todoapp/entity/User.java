package com.darius.todoapp.entity;

import jakarta.persistence.*;

// This class is mapped to a DB table - an entity class
@Entity
@Table(name="users")
public class User {

    // Define the fields

    // this field is the PK of the table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="username")
    private String username;

    @Column(name="email")
    private String email;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="hashed_password")
    private String hashedPassword;

    @Column(name="role")
    private String role;

    // Define the constructors
    public User() {

    }

    public User(Long id, String username, String email, String firstName, String lastName, String hashedPassword, String role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.hashedPassword = hashedPassword;
        this.role = role;
    }


}
