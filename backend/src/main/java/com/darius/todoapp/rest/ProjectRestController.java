package com.darius.todoapp.rest;

import com.darius.todoapp.dto.ProjectRequest;
import com.darius.todoapp.dto.ProjectResponse;
import com.darius.todoapp.dto.ProjectUpdateRequest;
import com.darius.todoapp.entity.Project;
import com.darius.todoapp.entity.User;
import com.darius.todoapp.exception.BadRequestException;
import com.darius.todoapp.exception.ResourceNotFoundException;
import com.darius.todoapp.mapper.ProjectMapper;
import com.darius.todoapp.service.ProjectService;
import com.darius.todoapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.darius.todoapp.mapper.ProjectMapper.convertToResponse;

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


    // GET Requests
    // List of all the projects
    @GetMapping
    public List<ProjectResponse> findAll() {

        return ProjectMapper.convertToResponseList(projectService.findAll());
    }


    // POST Requests
    // Add a Project
    @PostMapping
    public ProjectResponse addProject(@RequestBody ProjectRequest projectRequest) {

        if(projectRequest.getUserId() == null)
            throw new BadRequestException("userId field is mandatory in order to create a new project!");

        User theUser = userService.findById(projectRequest.getUserId());
        // We cannot create a Project that is not related to any user
        if(theUser == null)
            throw new ResourceNotFoundException("The user with the id: " + projectRequest.getUserId() + " was not found!");

        if(projectRequest.getName() == null || projectRequest.getName().isBlank())
            throw new BadRequestException("name field is mandatory in order to create a new project!");

        Project theProject = new Project(
                projectRequest.getName(),
                theUser
        );

        Project dbProject = projectService.save(theProject);

        return ProjectMapper.convertToResponse(dbProject);
    }


    // PUT
    // Update a project
    @PutMapping("/{projectId}")
    public ProjectResponse updateProject(@PathVariable Long projectId, @RequestBody ProjectUpdateRequest projectUpdateRequest) {

        // We cannot update a project without an existing id
        Project existingProject = projectService.findById(projectId);
        if(existingProject == null)
            throw new ResourceNotFoundException("Project with the id: " + projectId + " not found!");

        if(projectUpdateRequest.getName() == null || projectUpdateRequest.getName().isBlank())
            throw new BadRequestException("name field is mandatory in order to update a project!");


        existingProject.setName(projectUpdateRequest.getName());

        Project dbProject = projectService.save(existingProject);

        return convertToResponse(dbProject);
    }


    // DELETE Request
    // Delete a project
    @DeleteMapping("/{projectId}")
    public String deleteProject(@PathVariable Long projectId) {

        Project projectToDelete = projectService.findById(projectId);
        if(projectToDelete == null)
            throw new ResourceNotFoundException("Project id not found - " + projectId);

        projectService.deleteById(projectId);

        return "Deleted the project with the id: " + projectId;
    }
}
