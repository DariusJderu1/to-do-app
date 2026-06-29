package com.darius.todoapp.dao;

import com.darius.todoapp.entity.Project;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProjectDAOImpl implements ProjectDAO {

    private final EntityManager entityManager;


    @Autowired
    public ProjectDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }


    @Override
    public Project findById(Long theId) {

        return entityManager.find(Project.class, theId);
    }

    @Override
    public List<Project> findAll() {

        TypedQuery<Project> theQuery = entityManager.createQuery(
                "FROM Project", Project.class
        );

        return theQuery.getResultList();
    }

    @Override
    public Project save(Project theProject) {

        Project dbProject = entityManager.merge(theProject);

        return dbProject;
    }

    @Override
    public void deleteById(Long theId) {

        Project theProject = entityManager.find(Project.class, theId);

        if(theProject != null)
            entityManager.remove(theProject);
    }
}
