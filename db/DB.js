const cTable = require('console.table');
const connection = require('./connection');

class DB {
  constructor(connection) {
    this.db = connection;
  }

  viewDepts = () => this.db.promise().query('SELECT * FROM department').then(([data]) => {
    console.table(data)
  });

  viewRoles = () => this.db.promise().query(`
    SELECT
        r.id,
        r.title,
        r.salary,
        d.name 'department'
    FROM role r
    JOIN department d 
    ON r.department_id = d.id
    `).then(([data]) => {
    console.table(data)
  });

  viewEmps = () => this.db.promise().query(`
      SELECT
        e.id,
        e.first_name,
        e.last_name,
        r.title,
        d.name "department",
        r.salary,
        concat(e2.first_name, " ", e2.last_name) AS "manager"
      FROM employee AS e
      JOIN role AS r
      ON e.role_id = r.id
      JOIN department AS d
      ON r.department_id = d.id
      LEFT JOIN employee AS e2
      ON e.manager_id = e2.id
  `).then(([data]) => {
    console.table(data)
  });

  addDept = async ({name}) => {
    this.db.promise().query(`INSERT INTO department SET ?`, {name});
  };

  getDepts = async () => {
    let [data] = await this.db.promise().query('SELECT name, id AS "value" FROM department');
    return data;
  };

  addRole = async () => {title};
  

};


module.exports = new DB(connection);