export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
  get objGetter() {
    return this.name;
    return this.length;
    return this.students;
  }

  set objGetter() {
    
