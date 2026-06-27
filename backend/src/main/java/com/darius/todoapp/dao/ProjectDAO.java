package com.darius.todoapp.dao;

import com.darius.todoapp.entity.Project;

import java.util.List;

public interface ProjectDAO {

    List<Project> findAll();

    Project save(Project theProject);

    void deleteById(Long id);
}
