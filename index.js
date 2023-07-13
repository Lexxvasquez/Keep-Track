const DB = require('./db/DB');
const { prompt } = require("inquirer");
const questions = require('./questions');

const init = () =>
  prompt(questions)
  .then(ans => {
    let {task} = ans;
    
    switch (task) {
      case 'view all departments': return DB.viewDepts().then(init);
      case 'view all roles': return DB.viewRoles().then(init);
      case 'view all employees': return DB.viewEmps().then(init);
      case 'add a department': return DB.addDept(ans).then(init);
      case 'add a role': return DB.addRole().then(init);
      case 'add an employee': return console.log('test');
      case 'update an employee role': return console.log('test');
    }
  })

init();