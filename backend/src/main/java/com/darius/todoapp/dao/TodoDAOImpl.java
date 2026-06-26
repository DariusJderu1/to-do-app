package com.darius.todoapp.dao;

import com.darius.todoapp.entity.Todo;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
    public void deleteById(int theId) {

        Todo theTodo = entityManager.find(Todo.class, theId);

        entityManager.remove(theTodo);
    }
}
