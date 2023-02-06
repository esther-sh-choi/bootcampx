SELECT count(*) FROM assignments;
-- Result: 424

SELECT 424 - count(assignment_submissions)
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
-- Don't hardcode the column
-- We want to subtract the number of assignment submission from the total number of assignments given, which is 424

SELECT (
  SELECT count(assignments)
  FROM assignments
)-count(assignment_submissions) as total_incomplete
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
-- This can be done if the sub-select returns a single value
-- Result: 303