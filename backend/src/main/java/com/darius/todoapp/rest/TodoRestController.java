package com.darius.todoapp.rest;

import com.darius.todoapp.dto.TodoPatchRequest;
import com.darius.todoapp.dto.TodoRequest;
import com.darius.todoapp.dto.TodoResponse;
import com.darius.todoapp.entity.Project;
import com.darius.todoapp.entity.Todo;
import com.darius.todoapp.exception.BadRequestException;
import com.darius.todoapp.exception.ResourceNotFoundException;
import com.darius.todoapp.service.ProjectService;
import com.darius.todoapp.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// This class will have endpoints and the methods will return HTTP responses
@RestController
@RequestMapping("/api/todos")
public class TodoRestController {

    private final TodoService todoService;
    private final ProjectService projectService;

    @Autowired
    public TodoRestController(TodoService todoService, ProjectService projectService) {

        this.todoService = todoService;
        this.projectService = projectService;
    }


    // Converts a basic Todo entity to the Todo Response
    private TodoResponse convertToResponse(Todo todo) {

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
    private List<TodoResponse> convertToResponseList(List<Todo> todos) {

        return todos.stream()
                .map(todo -> convertToResponse(todo))
                .toList();
    }


    // GET requests

    // When someone does a GET request at this endpoint
    // this method will be called and return a list of
    // all the todos
    @GetMapping
    public List<TodoResponse> findAll() {

        return convertToResponseList(todoService.findAll());
    }

    // Get all the todos for today
    @GetMapping("/today")
    public List<TodoResponse> getTodosToday() {

        return convertToResponseList(todoService.findTodosToday());
    }

    // Get all the following todos in the next seven days
    @GetMapping("/next-seven-days")
    public List<TodoResponse> getTodosNextSevenDays() {

        return convertToResponseList(todoService.findTodosNextSevenDays());
    }

    // Get all important todos
    @GetMapping("/important")
    public List<TodoResponse> getImportantTodos() {

        return convertToResponseList(todoService.findAllImportant());
    }


    // POST Requests

    // Add a todo
    // The @RequestBody annotation tells Spring
    // to take the body of the HTTP request, the JSON
    // and transform it into a Java Object of type TodoRequest
    // (in this case) using Jackson
    @PostMapping
    public TodoResponse addTodo(@RequestBody TodoRequest todoRequest) {

        // All the things below aren't needed anymore, because
        // we have a TodoRequest that forces the fields, not just
        // Todo entity where an ID passed would have been wrong

        // ---------------------------------------
        // In case the client passes an ID in the
        // request body, we set the id to null to make
        // sure an insert is made, not an update
        // ---------------------------------------
        // theTodo.setId(Long.valueOf(0));
        // ---------------------------------------
        // we basically kinda only return the JSON
        // the client has sent but with the updated ID
        // return todoService.save(theTodo);

        if(todoRequest.getProjectId() == null)
            throw new BadRequestException("projectId is required. Cannot create a todo without a project!");

        if(todoRequest.getTitle() == null || todoRequest.getTitle().isBlank())
            throw new BadRequestException("title is required. Cannot create a todo without a title!");

        Project project = projectService.findById(todoRequest.getProjectId());

        // We cannot have a todo that is not related to any project
        if(project == null)
            throw new ResourceNotFoundException("Project id " + todoRequest.getProjectId() + " not found. Cannot create a Todo without an existing Project!");

        Todo theTodo = new Todo(
                todoRequest.getTitle(),
                todoRequest.getDescription(),
                todoRequest.getDueDate(),
                todoRequest.isCompleted(),
                todoRequest.isImportant(),
                project
        );

        Todo dbTodo = todoService.save(theTodo);

        return convertToResponse(dbTodo);
    }


    // PUT & PATCH Requests

    // Update a todo
    @PutMapping("/{todoId}")
    public TodoResponse updateTodo(@PathVariable Long todoId, @RequestBody TodoRequest todoRequest) {

        // Before TodoRequest/Response
        // Todo dbTodo = todoService.save(theTodo);
        // return dbTodo;

        Todo existingTodo = todoService.findById(todoId);

        if(existingTodo == null)
            throw new ResourceNotFoundException("todoId " + todoId + " not found. Cannot update a Todo without an existing Id!");

        if(todoRequest.getProjectId() == null)
            throw new BadRequestException("You must provide a projectId in order to update a Todo!");

        Project project = projectService.findById(todoRequest.getProjectId());

        if(project == null)
            throw new ResourceNotFoundException("projectId " + todoRequest.getProjectId() + " not found. Cannot update a Todo without an existing Project!");

        if(todoRequest.getTitle() == null || todoRequest.getTitle().isBlank())
            throw new BadRequestException("title is required. Cannot update a todo without a title!");


        existingTodo.setTitle(todoRequest.getTitle());
        existingTodo.setDescription(todoRequest.getDescription());
        existingTodo.setDueDate(todoRequest.getDueDate());
        existingTodo.setCompleted(todoRequest.isCompleted());
        existingTodo.setImportant(todoRequest.isImportant());
        existingTodo.setProject(project);

        Todo dbTodo = todoService.save(existingTodo);

        return convertToResponse(dbTodo);
    }

    // Update a todo with a partial request body
    // Didn't use a classic Map<String, Object> and the jsonMapper object
    // because first of all we needed the request of a Todo (TodoRequest) not just a Todo,
    // from obvious reasons (we didn't want the json of the Todo to have a complete project json field in it).
    // Second of all we had to create a TodoPatchRequest (instead of TodoRequest) so we can make use of Boolean
    // (instead of boolean) data type. If we used boolean, because of its primitive nature,
    // if the client didn't send explicit values for those 2 fields (completed and important)
    // the object created in TodoRequest would have had false as default for those two fields
    // and results in a mistake. The PATCH request is meant to be able to send whatever fields you wish
    @PatchMapping("/{todoId}")
    public TodoResponse patchTodo(@PathVariable Long todoId, @RequestBody TodoPatchRequest patchRequest) {

        Todo existingTodo = todoService.findById(todoId);

        // If there is no todo, we cannot update anything
        if(existingTodo == null)
            throw new RuntimeException("Todo id not found - " + todoId);


        // Create the Patch - complete the todo
        if(patchRequest.getTitle() != null)
            existingTodo.setTitle(patchRequest.getTitle());

        if(patchRequest.getDescription() != null)
            existingTodo.setDescription(patchRequest.getDescription());

        if(patchRequest.getDueDate() != null)
            existingTodo.setDueDate(patchRequest.getDueDate());

        if(patchRequest.getCompleted() != null)
            existingTodo.setCompleted(patchRequest.getCompleted());

        if(patchRequest.getImportant() != null)
            existingTodo.setImportant(patchRequest.getImportant());

        if(patchRequest.getProjectId() != null) {

            Project project = projectService.findById(patchRequest.getProjectId());

            if(project == null)
                throw new RuntimeException("Project id not found - " + patchRequest.getProjectId());

            else
                existingTodo.setProject(project);
        }


        Todo dbTodo = todoService.save(existingTodo);

        return convertToResponse(dbTodo);
    }


    // DELETE Requests

    // Delete a todo
    @DeleteMapping("/{todoId}")
    public String deleteTodo(@PathVariable Long todoId) {

        Todo theTodo = todoService.findById(todoId);

        if(theTodo == null)
            throw new RuntimeException("Todo id not found - " + todoId);

        todoService.deleteById(todoId);

        return "Deleted todo with the id - " + todoId;
    }
}
