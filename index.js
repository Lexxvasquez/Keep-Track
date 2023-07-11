const {prompt} = require('inquirer');

prompt([
  {
    type: 'list',
    name: 'task',
    message: "What do you want to do?",
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
  }
])