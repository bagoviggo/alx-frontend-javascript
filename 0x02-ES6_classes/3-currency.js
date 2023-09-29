export default class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._validateAndSet('code', newCode);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._validateAndSet('name', newName);
  }

  _validateAndSet(property, value) {
    if (typeof value === 'string') {
      this[`_${property}`] = value;
    } else {
      throw new TypeError(`${property.charAt(0).toUpperCase() + property.slice(1)} must be a string`);
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
