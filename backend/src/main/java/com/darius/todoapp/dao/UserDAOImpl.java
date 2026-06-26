package com.darius.todoapp.dao;

import com.darius.todoapp.entity.User;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import java.util.List;

// This class is specialized in DB operations
// It is also a spring bean - available for injection
@Repository
public class UserDAOImpl implements UserDAO {

    // The object used to communicate with the DB
    // The Class at the very end is a spring bean - available for injection
    private EntityManager entityManager;

    // The annotation tells Spring to inject a dependency
    @Autowired
    public UserDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

//    @Override
//    public List<User> findAll() {
//
//        // Create a query
//        TypedQuery<User> theQuery = entityManager.createQuery(
//                "FROM User", User.class
//        );
//
//        // execute the query
//        List<User> users = theQuery.getResultList();
//
//        return users;
//    }
}
