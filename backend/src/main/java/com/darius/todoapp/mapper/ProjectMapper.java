package com.darius.todoapp.mapper;

import com.darius.todoapp.dto.ProjectResponse;
import com.darius.todoapp.entity.Project;

import java.util.List;

public class ProjectMapper {

    // Convert a basic Project to a ProjectResponse
    public static ProjectResponse convertToResponse(Project theProject) {

        return new ProjectResponse(
                theProject.getId(),
                theProject.getName(),
                theProject.getUser().getId(),
                theProject.getUser().getUsername()
        );
    }

    // Convert a list of Projects to a list of ProjectResponse
    public static List<ProjectResponse> convertToResponseList(List<Project> theProjects) {

        return theProjects.stream()
                .map(theProject -> convertToResponse(theProject))
                .toList();
    }
}
