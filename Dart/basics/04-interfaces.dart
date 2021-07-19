void main() {
  Person moses = Person('moses', 23);
  dynamic d = 45;
  print(moses.age);
  print(d);
  d = '455';
  print(d);
}

class Person {
  String name = '';
  double age = 0;
  Person(String name, double age) {
    this.name = name;
    this.age = age;
  }
}
