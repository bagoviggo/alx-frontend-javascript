class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArray(students, 'students');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, 'name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, 'length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateArray(newStudents, 'students');
  }

  static _validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propertyName.charAt(0).toUpperCase() + propertyName.slice(1)} must be a string`);
    }
    return value;
  }

  static _validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propertyName.charAt(0).toUpperCase() + propertyName.slice(1)} must be a number`);
    }
    return value;
  }

  static _validateArray(value, propertyName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${propertyName.charAt(0).toUpperCase() + propertyName.slice(1)} must be an array`);
    }
    return value;
  }
}
export default HolbertonCourse;
