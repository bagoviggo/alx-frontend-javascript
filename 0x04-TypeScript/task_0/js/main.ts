interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "SpongeBob",
  lastName: "Squarepants",
  age: 29,
  location: "Bikini Bottom",
};


const student2: Student = {
  firstName: "Loise",
  lastName: "Griffin",
  age: 25,
  location: "Quahog",
};


const studentsList: Student[] = [student1, student2];


// Function to render the table
function renderTable(students: Student[]) {
  const table = document.createElement("table");

  // Create header row
  const headerRow = table.insertRow();
  const header1 = headerRow.insertCell(0);
  const header2 = headerRow.insertCell(1);
  header1.textContent = "First Name";
  header2.textContent = "Location";

  // Create a row for each student
  students.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  // Append the table to the document
  document.body.appendChild(table);
}

// Render the table with the students' information
renderTable(studentsList);

