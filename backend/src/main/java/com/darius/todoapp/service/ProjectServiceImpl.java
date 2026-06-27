package com.darius.todoapp.service;

import com.darius.todoapp.dao.ProjectDAO;
import com.darius.todoapp.entity.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectDAO projectDAO;

    @Autowired
    public ProjectServiceImpl(ProjectDAO projectDAO) {

        this.projectDAO = projectDAO;
    }

    @Override
    public List<Project> findAll() {

        return projectDAO.findAll();
    }

    @Transactional
    @Override
    public Project save(Project theProject) {

        return projectDAO.save(theProject);
    }

    @Transactional
    @Override
    public void deleteById(Long theId) {

        projectDAO.deleteById(theId);
    }
}
