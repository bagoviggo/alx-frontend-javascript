export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  return students.map((student) => {
    if (student.location === city) {
      const grade = newGrades.find((g) => g.id === student.id);
      if (grade && typeof grade.grade === 'number') {
        return { ...student, grade: grade.grade };
      }
    }
    return student;
  });
}
