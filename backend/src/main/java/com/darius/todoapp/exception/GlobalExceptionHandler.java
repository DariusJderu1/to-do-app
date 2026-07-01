package com.darius.todoapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

// The annotation basically says that the class is a
// controller helper class. When an exception is thrown,
// the class with this annotation is searched and
// the appropriate method is called to handle the exception
@ControllerAdvice
public class GlobalExceptionHandler {

    // Not found
    @ExceptionHandler
    public ResponseEntity<ApiErrorResponse> handleException(ResourceNotFoundException exc) {

        ApiErrorResponse error = new ApiErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}
