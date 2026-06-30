package com.darius.todoapp.dao;

import com.darius.todoapp.entity.User;

public interface UserDAO {

    User findById(Long id);
}
