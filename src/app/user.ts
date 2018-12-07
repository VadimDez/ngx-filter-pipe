export class User {
  firstName: string;
  lastName: string;

  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;

    // you have to bind function in case you want to filter by getName function
    this.getName = this.getName.bind(this);
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}
