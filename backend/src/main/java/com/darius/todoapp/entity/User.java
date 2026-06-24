package com.darius.todoapp.entity;

import jakarta.persistence.*;

// This class is mapped to a DB table - an entity class
@Entity
@Table(name="users")
public class User {

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
}
