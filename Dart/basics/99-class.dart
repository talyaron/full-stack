class Person {
  String name = 'Dan';
  int age = 23;
  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}

double addNumbers(double num1, double num2) {
  return num1 + num2;
}

void main() {
  var dan = Person('Dan', 12);
  var mos = Person('mos', 45);
  var rs = addNumbers(3.453636, 5.456);
  print(rs);
  print(dan.name);
  print(mos.name);
}
