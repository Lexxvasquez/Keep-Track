DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
);

CREATE TABLE role(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100),
  salary DECIMAL (8,2),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee(
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT DEFAULT NULL,
  FOREIGN KEY (role_id) REFERENCES role (id),
  FOREIGN KEY (manager_id) REFERENCES employee (id)
);

CREATE TABLE title(
  id INT PRIMARY KEY AUTO_INCREMENT,
  description TEXT NOT NULL UNIQUE
  );

  CREATE TABLE salary(
    id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL (9,2),
    start_date DATE,
    end_date DATE,
    emp_id INT,
    FOREIGN KEY (emp_id) REFERENCES employee (id)
  );

  CREATE TABLE department_id(
    dept_id int primary key auto_increment not null,
    dept_title varchar(45) default 'NULL',
    constraint fk_dept,
    foreign key (dept_id) references department(id) on delete cascade
  );

  CREATE TABLE first_name(
    fname_id int primary key auto_increment not null,
    f_name varchar(60) unique
  );

  CREATE TABLE last_name(
    lname_id int primary key auto_increment not null,
    l_name varchar(70) unique
  );

  CREATE TABLE role_id(
    r_id int primary key auto_increment not null,
    job_desc text,
    titl_id int,
    sala_id int,
    depid_int int,
    contra bool default false,
    CONSTRAINT FK_TITL
  );

  