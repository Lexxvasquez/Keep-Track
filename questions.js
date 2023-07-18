const DB = require('./db/DB');

const questions = [
  {
    type: "list",
    name: "task",
    message: "What do you want to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
    ]
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the new department?',
    when: ({task}) => task == 'add a department'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the role?',
    when: ({task}) => task == 'add a role'
  },
  {
    type: 'number',
    name: 'salary',
    message: 'How much does this position earn per year? (Enter as number)',
    when: ({task}) => task == 'add a role'
  },
  {
    type: 'list',
    name: 'department_id',
    message: 'Which department will be assigned with this role?',
    choices: async() => DB.getDepts(),
    when: ({task}) => task == 'add a role'
  },
  {
    type: 'input',
    name: 'first_name',
    message: "What is the employee's first name?",
    when: ({task}) => task == 'add an employee'
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What is the employee's last name?",
    when: ({task}) => task == 'add an employee'
  },
  {
    type: 'list',
    name: 'id',
    message: "Who is the employee you want to update?",
    choices: async() => DB.getEmps(),
    when: ({task}) => task == 'update an employee role'
  },
  {
    type: 'list',
    name: 'role_id',
    message: "What is the employee's new role?",
    choices: async() => DB.getRoles(),
    when: ({task}) => task == 'add an employee' || task == 'update an employee role'
  },
  {
    type: 'list',
    name: 'manager_id',
    message: "Who is the employee's manager?",
    choices: async() => DB.getEmps(),
    when: ({task}) => task == 'add an employee'
  },
]
// {
//   type: 'list',
//   name: 'manager_id',
//   message: "Who is the employee's manager?",
//   choices: async() => DB.getEmps(),
//   when: ({task}) => task == ''
// },

module.exports = questions;