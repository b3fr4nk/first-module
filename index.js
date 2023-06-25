class greeting {
  constructor(greeting) {
    this.greeting = greeting;
  }
}


exports.greet = () => {
  return new greeting('hello world').greeting;
}