package com.darius.todoapp.rest;

import com.darius.todoapp.dto.ProjectRequest;
import com.darius.todoapp.dto.ProjectResponse;
import com.darius.todoapp.entity.Project;
import com.darius.todoapp.entity.User;
import com.darius.todoapp.service.ProjectService;
import com.darius.todoapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// This class will have endpoints and the methods will return http responses
@RestController
// All the endpoints will start with what is in between ""
@RequestMapping("/api/projects")
public class ProjectRestController {

    // Fields
    private final ProjectService projectService;
    private final UserService userService;


    // Constructors
    @Autowired
    public ProjectRestController(ProjectService projectService, UserService userService) {

        this.projectService = projectService;
        this.userService = userService;
    }


    // Useful functions

    // Convert a basic Project to a ProjectResponse
    private ProjectResponse convertToResponse(Project theProject) {

        return new ProjectResponse(
                theProject.getId(),
                theProject.getName(),
                theProject.getUser().getId(),
                theProject.getUser().getUsername()
        );
    }

    // Convert a list of Projects to a list of ProjectResponse
    private List<ProjectResponse> convertToResponseList(List<Project> theProjects) {

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

        User theUser = userService.findById(projectRequest.getUserId());

        // We cannot create a Project that is not related to any user
        if(theUser == null)
            throw new RuntimeException("User id not found - " + projectRequest.getUserId());

        Project theProject = new Project(
                projectRequest.getName(),
                theUser
        );

        Project dbProject = projectService.save(theProject);

        return convertToResponse(dbProject);
    }
}
