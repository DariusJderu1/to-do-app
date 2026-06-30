package com.darius.todoapp.service;

import com.darius.todoapp.entity.User;

public interface UserService {

    User findById(Long id);
}
