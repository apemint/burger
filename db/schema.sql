-- SQL queries

--Create 'burger_db'
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
--Switch to/use 'burger_db'
USE burgers_db;
--Create 'burgers' table with:
CREATE TABLE burgers(
--id auto incre primary key
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
--burger_name string
    burger_name VARCHAR(50),
--devoured boolean
    devoured BOOLEAN DEFAULT 0,
--primary key id
    PRIMARY KEY (id)
);