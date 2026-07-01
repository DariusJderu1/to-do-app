package com.darius.todoapp.exception;

// Class for defining the JSON body of the
// HTTP Response, given in case of an error
public class ApiErrorResponse {

    // Fields
    private int status;
    private String message;
    private long timeStamp;


    // Constructors
    public ApiErrorResponse() {

    }

    public ApiErrorResponse(int status, String message, long timeStamp) {
        this.status = status;
        this.message = message;
        this.timeStamp = timeStamp;
    }


    // Setters and Getters
    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }
}
