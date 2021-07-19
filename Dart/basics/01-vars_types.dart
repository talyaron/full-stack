//https://www.tutorialspoint.com/dart_programming/dart_programming_data_types.htm
//numbers
import 'dart:math';

//numbers
int x = 23;
double x_0 = sqrt(x);

//strings
String y = 'hi';

//Booleans
bool isTrue = true;

//lists
List<int> arr = [1, 2, 3, 6];

//Maps
Map obj = {'a': 1, 12: 3};

//dynamic
dynamic r = 23;

//enums
enum Status { none, running, stopped, paused }

void main() {
  print(x);
  print(x_0);
  print(y);
  print(isTrue);
  print(arr);
  print(obj);

  print(Status.values);
  Status.values.forEach((v) => print('value: $v, index: ${v.index}'));
  print('running: ${Status.running}, ${Status.running.index}');
  print('running index: ${Status.values[1]}');

  print(r);
  r = 'aaa';
  print(r);
}
