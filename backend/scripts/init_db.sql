CREATE DATABASE IF NOT EXISTS `todo_app`;
USE `todo_app`;

-- Delete the tables if they exist (the order matters because of the FK)
DROP TABLE IF EXISTS `todos`;
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

-- Create table todos
CREATE TABLE `todos` (
                         `id` bigint NOT NULL AUTO_INCREMENT,
                         `title` varchar(255) NOT NULL,
                         `description` text DEFAULT NULL,
                         `due_date` date DEFAULT NULL,
                         `completed` boolean DEFAULT false,
                         `important` boolean DEFAULT false,
                         `user_id` bigint NOT NULL,

                         PRIMARY KEY (`id`),
                         CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


-- Insert some demo values into the db

-- Insert users
INSERT INTO `users` (`username`, `email`, `first_name`, `last_name`, `role`) VALUES
                                                                                 ('johndoe99', 'john.doe@company.com', 'John', 'Doe', 'ROLE_USER'),
                                                                                 ('jane_admin', 'jane.smith@company.com', 'Jane', 'Smith', 'ROLE_ADMIN'),
                                                                                 ('mross', 'mike.ross@company.com', 'Mike', 'Ross', 'ROLE_USER');

-- Insert todos
INSERT INTO `todos` (`title`, `description`, `due_date`, `completed`, `important`, `user_id`) VALUES
                                                                                                  ('Setup Spring Boot Architecture', 'Configure the initial project structure, including Maven dependencies and application.properties.', '2026-06-28', false, true, 1),
                                                                                                  ('Implement JPA Entities', 'Create User and Todo entity classes with proper One-To-Many mappings and annotations.', '2026-06-30', false, true, 1),
                                                                                                  ('Read React Documentation', 'Focus on useState and useEffect hooks for the frontend logic.', NULL, true, false, 1);

INSERT INTO `todos` (`title`, `description`, `due_date`, `completed`, `important`, `user_id`) VALUES
                                                                                                  ('Design UI Wireframes', 'Create basic wireframes for the dashboard and the task list using Figma.', '2026-07-05', false, true, 2),
                                                                                                  ('Buy office supplies', 'Need to restock on sticky notes, whiteboard markers, and some good espresso beans.', NULL, false, false, 2);

INSERT INTO `todos` (`title`, `description`, `due_date`, `completed`, `important`, `user_id`) VALUES
    ('Fix database constraints', 'Ensure that ON DELETE CASCADE is working properly for the foreign key relations.', '2026-06-26', false, false, 3);







