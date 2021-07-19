String sayHello(String name) {
  return 'Hello $name';
}

// Lambda Functions
int multi(int number) => number * 3;

main() {
  print(sayHello('Moses'));
  print(multi(5));
}
