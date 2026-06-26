package com.darius.todoapp.dao;

import com.darius.todoapp.entity.Todo;

import java.util.List;

public interface TodoDAO {

    List<Todo> findAll();

    Todo save(Todo theTodo);

    void deleteById(int theId);
}
