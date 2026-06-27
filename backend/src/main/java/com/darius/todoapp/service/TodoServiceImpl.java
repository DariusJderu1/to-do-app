package com.darius.todoapp.service;

import com.darius.todoapp.dao.TodoDAO;
import com.darius.todoapp.entity.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
public class TodoServiceImpl implements TodoService{

    private final TodoDAO todoDAO;


    @Autowired
    public TodoServiceImpl(TodoDAO todoDAO) {

        this.todoDAO = todoDAO;
    }


    @Override
    public Todo findById(Long theId) {

        return todoDAO.findById(theId);
    }

    @Override
    public List<Todo> findAll() {

        return todoDAO.findAll();
    }

    @Transactional
    @Override
    public Todo save(Todo theTodo) {

        return todoDAO.save(theTodo);
    }

    @Transactional
    @Override
    public void deleteById(Long theId) {

        todoDAO.deleteById(theId);
    }

    @Override
    public List<Todo> findTodosToday() {

        return todoDAO.findByDueDate(LocalDate.now());
    }

    @Override
    public List<Todo> findTodosNextSevenDays() {

        LocalDate today = LocalDate.now();
        return todoDAO.findByDueDateBetween(today, today.plusDays(7));
    }

    @Override
    public List<Todo> findAllImportant() {

        return todoDAO.findAllImportant();
    }
}
