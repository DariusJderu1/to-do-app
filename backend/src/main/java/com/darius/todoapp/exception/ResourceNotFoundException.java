package com.darius.todoapp.exception;

// 404 NOT FOUND
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
