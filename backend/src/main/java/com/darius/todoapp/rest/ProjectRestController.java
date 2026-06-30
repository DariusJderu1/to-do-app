package com.darius.todoapp.rest;

import com.darius.todoapp.dto.ProjectRequest;
import com.darius.todoapp.dto.ProjectResponse;
import com.darius.todoapp.entity.Project;
import com.darius.todoapp.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// This class will have endpoints and the methods will return http responses
@RestController
// All the endpoints will start with what is in between ""
@RequestMapping("/api/projects")
public class ProjectRestController {

    // Fields
    private final ProjectService projectService;


    // Constructors
    public ProjectRestController(ProjectService projectService) {

        this.projectService = projectService;
    }


    // Useful functions

    // Convert a basic Project to a ProjectResponse
    public ProjectResponse convertToResponse(Project theProject) {

        return new ProjectResponse(
                theProject.getId(),
                theProject.getName(),
                theProject.getUser().getId(),
                theProject.getUser().getUsername()
        );
    }

    // Convert a list of Projects to a list of ProjectResponse
    public List<ProjectResponse> convertToResponseList(List<Project> theProjects) {

        return theProjects.stream()
                .map(theProject -> convertToResponse(theProject))
                .toList();
    }

    // GET Requests
    // List of all the projects
    @GetMapping
    public List<ProjectResponse> findAll() {

        return convertToResponseList(projectService.findAll());
    }

    // POST Requests
    // Add a Project
    @PostMapping
    public ProjectResponse addProject(@RequestBody ProjectRequest projectRequest) {

        User
    }
}
