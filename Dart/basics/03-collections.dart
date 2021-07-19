//https://www.tutorialspoint.com/dart_programming/dart_programming_collection.htm

//List (with generecis)
List<String> games = ['doom', 'wow'];

//set
Set students = new Set.from(['dave', 'allen', 'dave']);

//Map
Map moses = {'name': 'moses'};

void main() {
  for (String game in games) {
    print(game);
  }
  print(games);
  games.add('Mincraft');
  print(games);
  games.remove('doom');
  print(games);

  print(students);

  moses.addAll({'dept': 'HR', 'email': 'tom@xyz.com'});
  print(moses);
}
