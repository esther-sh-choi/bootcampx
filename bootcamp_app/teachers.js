const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "pw",
  host: "localhost",
  database: "bootcampx",
});

const sqlQuery = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || "JUL02"}'
ORDER BY teacher;
`;

pool
  .query(sqlQuery)
  .then((res) =>
    res.rows.forEach((teacher) =>
      console.log(`${teacher.cohort}: ${teacher.teacher}`)
    )
  )
  .catch((err) => console.error("query error", err.stack));
