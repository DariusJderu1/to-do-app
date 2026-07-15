package com.darius.todoapp.service;

import com.darius.todoapp.entity.Project;

import java.util.List;

public interface ProjectService {

    Project findById(Long theId);

    List<Project> findAll();

    Project save(Project theProject);

    void deleteById(Long theId);
}
