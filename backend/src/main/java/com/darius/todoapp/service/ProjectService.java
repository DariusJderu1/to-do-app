package com.darius.todoapp.service;

import com.darius.todoapp.entity.Project;
import com.darius.todoapp.entity.Todo;

import java.util.List;

public interface ProjectService {

    Project findById(Long theId);

    List<Project> findAll();

    List<Todo> findAllProjectTodos(Long projectId);

    Project save(Project theProject);

    void deleteById(Long theId);
}
