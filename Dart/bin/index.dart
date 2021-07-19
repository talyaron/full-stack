void main() {
  var x = 2;
  print(double(x));

  for (var month = 1; month <= 12; month++) {
    print(month);
  }

  var hundai20 = Car('hundai',null);

  hundai20.describe();
  hundai20.sayPrice();
}

int double(int n) {
  return n * 2;
}

class Car {
  String manifucture;
  int? price;

  Car(this.manifucture, this.price) {}

  void describe() {
    print('manifucture of car is $manifucture');
  }

  void sayPrice() {
    print('the price is $price');
  }
}
