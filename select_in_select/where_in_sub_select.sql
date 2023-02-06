SELECT assignment_id
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
--  (1, 2, 3, 4, 5, ...)

-- What we want:
-- SELECT assignments.name
-- FROM assignments 
-- WHERE id NOT IN (1, 2, 3, 4, 5, ...)

-- Instead of hardcoding the list like above, input a sub selection
SELECT assignments.name
FROM assignments 
WHERE id NOT IN
(
  SELECT assignment_id
  FROM assignment_submissions
  JOIN students ON students.id = student_id
  WHERE students.name = 'Ibrahim Schimmel'
);