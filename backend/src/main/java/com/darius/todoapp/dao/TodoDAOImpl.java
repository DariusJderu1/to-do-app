package com.darius.todoapp.dao;

import com.darius.todoapp.entity.Todo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class TodoDAOImpl implements TodoDAO {

    private EntityManager entityManager;

    @Autowired
    public TodoDAOImpl(EntityManager entityManager) {

        this.entityManager = entityManager;
    }

    @Override
    public List<Todo> findAll() {

        TypedQuery<Todo> theQuery = entityManager.createQuery(
                "FROM Todo", Todo.class
        );

        List<Todo> todos = theQuery.getResultList();

        return todos;
    }

    @Override
    public Todo save(Todo theTodo) {

        // If the id of the theTodo that came from the client is 0
        // then that means an insert is needed, else update
        Todo dbTodo = entityManager.merge(theTodo);

        return dbTodo;
    }

    @Override
    public void deleteById(Long theId) {

        Todo theTodo = entityManager.find(Todo.class, theId);

        entityManager.remove(theTodo);
    }

    @Override
    public List<Todo> findByDueDate(LocalDate theDate) {

        TypedQuery<Todo> query = entityManager.createQuery(
               "FROM Todo WHERE dueDate = :theData", Todo.class
        );

        query.setParameter("theData", theDate);

        List<Todo> todos = query.getResultList();

        return todos;
    }

    @Override
    public List<Todo> findByDueDateBetween(LocalDate startDate, LocalDate endDate) {

        TypedQuery<Todo> query = entityManager.createQuery(
                "FROM Todo " +
                        "WHERE dueDate " +
                        "BETWEEN :startDate AND :endDate", Todo.class
        );

        query.setParameter("startDate", startDate);
        query.setParameter("endDate", endDate);

        return query.getResultList();
    }

    @Override
    public List<Todo> findAllImportant() {

        TypedQuery<Todo> query = entityManager.createQuery(
                "FROM Todo " +
                        "WHERE important = true", Todo.class
        );

        return query.getResultList();
    }
}
