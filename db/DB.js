const cTable = require("console.table");
const connection = require("./connection");

class DB {
  constructor(connection) {
    this.db = connection;
  }

  viewDepts = () =>
    this.db
      .promise()
      .query("SELECT * FROM department")
      .then(([data]) => {
        console.table(data);
      });

  viewRoles = () =>
    this.db
      .promise()
      .query(
        `
    SELECT
        r.id,
        r.title,
        r.salary,
        d.name 'department'
    FROM role r
    JOIN department d 
    ON r.department_id = d.id
    `
      )
      .then(([data]) => {
        console.table(data);
      });

  viewEmps = () =>
    this.db
      .promise()
      .query(
        `
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
  `
      )
      .then(([data]) => {
        console.table(data);
      });

  addDept = async ({ name }) => {
    this.db.promise().query(`INSERT INTO department SET ?`, { name });
  };

  getDepts = async () => {
    let [data] = await this.db
      .promise()
      .query('SELECT name, id AS "value" FROM department');
    return data;
  };

  getRoles = async () => {
    let [data] = await this.db
      .promise()
      .query('SELECT title AS name, id AS "value" FROM role');
    return data;
  };

  getEmps = async () => {
    let [data] = await this.db
      .promise()
      .query(
        'SELECT CONCAT(first_name," ",last_name) AS name, id AS "value" FROM employee'
      );
    data.push({ name: "Null", value: null });

    return data;
  };

  addRole = async ({ title, salary, department_id }) => {
    let [data] = await this.db
      .promise()
      .query(
        "INSERT INTO role SET ?",
        { title, salary, department_id },
        (err) => {
          if (err) return console.log(err);
          return;
        }
      );
  };

  addEmp = async ({ first_name, last_name, role_id, manager_id }) => {
    await this.db
      .promise()
      .query(
        "INSERT INTO employee SET ?",
        { first_name, last_name, role_id, manager_id },
        (err) => {
          if (err) return err;
          return;
        }
      );
  };

  updateRole = async ({ role_id, id }) => {

    await this.db
      .promise()
      .query("UPDATE employee SET ? WHERE ?", [{role_id}, {id}], (err) => {
        if (err) return err;
        return;
      });
  };
};

module.exports = new DB(connection);
