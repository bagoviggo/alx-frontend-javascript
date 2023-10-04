export default function updateStudentGradeByCity(students, city, newGrades) {
  // Ensure students is an array, city is a string, and newGrades is an array.
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  // Use filter to select students in the specified city and map to update their grades.
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
