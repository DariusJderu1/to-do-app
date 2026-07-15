package com.darius.todoapp.mapper;

import com.darius.todoapp.dto.TodoResponse;
import com.darius.todoapp.entity.Project;
import com.darius.todoapp.entity.Todo;

import java.util.List;

public class TodoMapper {

    // Converts a basic Todo entity to the Todo Response
    public static TodoResponse convertToResponse(Todo todo) {

        Project project = todo.getProject();

        return new TodoResponse(
                todo.getId(),
                todo.getTitle(),
                todo.getDescription(),
                todo.getDueDate(),
                todo.isCompleted(),
                todo.isImportant(),
                project.getId(),
                project.getName()
        );
    }

    // Convert a list of basic Todos in a List of TodoResponse
    public static List<TodoResponse> convertToResponseList(List<Todo> todos) {

        return todos.stream()
                .map(todo -> convertToResponse(todo))
                .toList();
    }
}
