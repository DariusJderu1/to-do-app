package com.darius.todoapp.service;

import com.darius.todoapp.dao.UserDAO;
import com.darius.todoapp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    // Fields
    private final UserDAO userDAO;


    // Constructors
    @Autowired
    public UserServiceImpl(UserDAO userDAO) {

        this.userDAO = userDAO;
    }


    // Interface methods
    @Override
    public User findById(Long id) {

        return userDAO.findById(id);
    }
}
