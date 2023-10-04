// main.ts

// Define the Teacher class
class Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean = true; // This attribute is always defined
  yearsOfExperience?: number; // This attribute is optional
  location: string;

  constructor({
    firstName,
    lastName,
    location,
    ...restAttributes
  }: {
    firstName: string;
    lastName: string;
    location: string;
    [key: string]: any; // Allow any additional attributes to be added
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;

    // Assign any additional attributes dynamically
    for (const key in restAttributes) {
      if (restAttributes.hasOwnProperty(key)) {
        this[key] = restAttributes[key];
      }
    }
  }
}

// Create a Teacher object with initial and additional attributes
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Adding an additional attribute
};

console.log(teacher3);
