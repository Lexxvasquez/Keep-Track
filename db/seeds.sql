
INSERT INTO department(name) 
VALUES 
  ('HR'),
  ('Production'),
  ('Sales');

INSERT INTO role(title, salary, department_id)
VALUES
  ('Manager', 80000, 1),
  ('Analyst', 65000, 2),
  ('Marketing Specialist', 47000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
  ('John Doe','Smith',1,NULL),
  ('Jane Smith','Brown',2,1),
  ('Tom Johnson','Lee',3,1);
