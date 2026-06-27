DROP DATABASE IF EXISTS `todo_app`;
CREATE DATABASE IF NOT EXISTS `todo_app`;
USE `todo_app`;

-- Delete the tables if they exist (the order matters because of the FK)
DROP TABLE IF EXISTS `todos`;
DROP TABLE IF EXISTS `projects`;
DROP TABLE IF EXISTS `users`;

-- Create table users
CREATE TABLE `users` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `username` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL UNIQUE,
    `first_name` varchar(50) DEFAULT NULL,
    `last_name` varchar(50) DEFAULT NULL,
    `hashed_password` varchar(255) DEFAULT NULL,
    `role` varchar(45) DEFAULT NULL,

    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `projects` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `user_id` bigint NOT NULL,

    PRIMARY KEY (`id`),
    CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- Create table todos
CREATE TABLE `todos` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `description` text DEFAULT NULL,
    `due_date` date DEFAULT NULL,
    `completed` boolean DEFAULT false,
    `important` boolean DEFAULT false,
    `project_id` bigint NOT NULL,

    PRIMARY KEY (`id`),
    CONSTRAINT `fk_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;



-- Insert some demo values into the db

-- Insert users
INSERT INTO `users` (`username`, `email`, `first_name`, `last_name`, `role`) VALUES
('johndoe99', 'john.doe@company.com', 'John', 'Doe', 'ROLE_USER');

-- Insert projects
INSERT INTO `projects` (`name`, `user_id`) VALUES
('Backend', 1),
('Personal', 1);

-- Insert todos for Backend project
INSERT INTO `todos` (`title`, `description`, `due_date`, `completed`, `important`, `project_id`) VALUES
('Setup Spring Boot Architecture', 'Configure the initial project structure, including Maven dependencies and application.properties.', '2026-06-28', false, true, 1),
('Implement JPA Entities', 'Create User, Project, and Todo entity classes with proper mappings.', '2026-06-30', false, true, 1),
('Create DAO Layer', 'Add DAO interfaces and implementations for database access.', NULL, false, false, 1);

-- Insert todos for Personal project
INSERT INTO `todos` (`title`, `description`, `due_date`, `completed`, `important`, `project_id`) VALUES
('Read React Documentation', 'Focus on useState and useEffect hooks for the frontend logic.', NULL, true, false, 2),
('Buy office supplies', 'Restock sticky notes, whiteboard markers, and espresso beans.', '2026-07-05', false, false, 2);







