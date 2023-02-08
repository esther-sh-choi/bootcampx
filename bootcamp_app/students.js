const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "pw",
  host: "localhost",
  database: "bootcampx",
});

const [cohort, limit] = process.argv.slice(2);

const sqlQuery = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${limit || 5};
`;

pool
  .query(sqlQuery)
  .then((res) =>
    res.rows.forEach((student) =>
      console.log(
        `${student.name} has an id of ${student.student_id} and was in the ${student.cohort} cohort.`
      )
    )
  )
  .catch((err) => console.error("query error", err.stack));
