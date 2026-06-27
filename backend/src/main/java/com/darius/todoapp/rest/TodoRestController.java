package com.darius.todoapp.rest;

import com.darius.todoapp.entity.Todo;
import com.darius.todoapp.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// This class will have endpoints and the methods will return HTTP responses
@RestController
@RequestMapping("/api/todos")
public class TodoRestController {

    private final TodoService todoService;

    @Autowired
    public TodoRestController(TodoService todoService) {

        this.todoService = todoService;
    }


    // GET requests

    // When someone does a GET request at this endpoint
    // this method will be called and return a list of
    // all the todos
    @GetMapping
    public List<Todo> findAll() {

        return todoService.findAll();
    }

    // Get all the todos for today
    @GetMapping("/today")
    public List<Todo> getTodosToday() {

        return todoService.findTodosToday();
    }

    // Get all the following todos in the next seven days
    @GetMapping("/next-seven-days")
    public List<Todo> getTodosNextSevenDays() {

        return todoService.findTodosNextSevenDays();
    }

    // Get all important todos
    @GetMapping("/important")
    public List<Todo> getImportantTodos() {

        return todoService.findAllImportant();
    }


    // POST Requests

    // The @RequestBody annotation tells Spring
    // to take the body of the HTTP request, the JSON
    // and transform it into a Java Object of type Todo
    // using Jackson
    // Add a todo
    @PostMapping
    public Todo addTodo(@RequestBody Todo theTodo) {

        // In case the client passes an ID in the
        // request body, we set the id to null to make
        // sure an insert is made, not an update
        theTodo.setId(Long.valueOf(0));

        // we basically kinda only return the JSON
        // the client has sent but with the updated ID
        return todoService.save(theTodo);
    }


    // PUT Requests

    // Update a todo
    @PutMapping
    public Todo updateTodo(@RequestBody Todo theTodo) {

        Todo dbTodo = todoService.save(theTodo);

        return dbTodo;
    }


    // DELETE Requests

    // Delete a todo
    @DeleteMapping("/{todoId}")
    public String deleteTodo(@PathVariable Long todoId) {

        Todo theTodo = todoService.findById(todoId);

        if(theTodo == null)
            throw new RuntimeException("Todo id not found - " + todoId);

        todoService.deleteById(todoId);

        return "Deleted todo with the id - " + todoId;
    }
}
