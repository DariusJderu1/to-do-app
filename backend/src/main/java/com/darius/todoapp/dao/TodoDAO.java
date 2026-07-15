package com.darius.todoapp.dao;

import com.darius.todoapp.entity.Todo;

import java.time.LocalDate;
import java.util.List;

public interface TodoDAO {

    Todo findById(Long theId);

    List<Todo> findAll();

    List<Todo> findAllByProjectId(Long theProjectId);

    Todo save(Todo theTodo);

    void deleteById(Long theId);

    List<Todo> findByDueDate(LocalDate theDate);

    List<Todo> findByDueDateBetween(LocalDate startDate, LocalDate endDate);

    List<Todo> findAllImportant();
}
