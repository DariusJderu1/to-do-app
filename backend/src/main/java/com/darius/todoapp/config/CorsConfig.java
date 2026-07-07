package com.darius.todoapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Created this class because of the problems of running
// the backend and the front end on the backend on different ports
// but the same IP address. The JS didn't receive the backend response
// without the approval of the backend

// This annotation tells Spring that this class
// offers configurations
@Configuration
public class CorsConfig {

    // This annotation tells Spring that this method
    // returns an object that is a Spring Bean
    // (in this case WebMvcConfigurer)
    @Bean
    public WebMvcConfigurer corsConfigurer() {

        // Create an anonymous implementation for the interface WebMvcConfigurer
        return new WebMvcConfigurer() {

            // We override the method to add the CORS rules
            @Override
            public void addCorsMappings(CorsRegistry registry) {

                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE")
                        .allowedHeaders("*");
            }
        };
    }
}