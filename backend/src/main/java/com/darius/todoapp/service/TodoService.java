package com.darius.todoapp.service;

import com.darius.todoapp.entity.Todo;

import java.util.List;

public interface TodoService {

    Todo findById(Long id);

    List<Todo> findAll();

    List<Todo> findAllByProjectId(Long theProjectId);

    Todo save(Todo theTodo);

    void deleteById(Long theId);

    List<Todo> findTodosToday();

    List<Todo> findTodosNextSevenDays();

    List<Todo> findAllImportant();
}
