package com.darius.todoapp.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;

// This class is specialized in DB operations
// It is also a spring bean - available for injection
@Repository
public class UserDAOImpl implements UserDAO {

    // The object used to communicate with the DB
    // The Class (EntityManager) is a spring bean - available for injection
    private final EntityManager entityManager;

    // The annotation tells Spring to inject a dependency
    @Autowired
    public UserDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
}
