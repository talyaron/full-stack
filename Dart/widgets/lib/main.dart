import 'package:flutter/material.dart';

//https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter 2.214',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Column(
            children: <Widget>[
              Image(
                image: NetworkImage(
                    'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp'),
                height: 100,
              ),
              Image(
                image: AssetImage(
                  'team.png',
                ),
                fit: BoxFit.fitWidth,
              ),
              Text('Hello World'),
            ],
          ),
        ),
        backgroundColor: Colors.greenAccent,
        bottomNavigationBar: BottomAppBar(
          shape: const CircularNotchedRectangle(),
          child: Container(
              height: 50.0,
              child: Row(
                children: [
                  Expanded(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        IconButton(
                          icon: const Icon(Icons.favorite),
                          color: Colors.pink,
                          tooltip: 'Increase volume by 10',
                          onPressed: () {},
                        ),
                        Text(
                          'Love',
                          style: TextStyle(color: Colors.pink),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: Column(
                      children: [
                        IconButton(
                          icon: const Icon(Icons.volume_up),
                          tooltip: 'Increase volume by 10',
                          onPressed: () {},
                        ),
                        Text(
                          'Music',
                          style: TextStyle(fontSize: 8),
                        ),
                      ],
                    ),
                  ),
                  TextButton(
                    onPressed: () {},
                    child: Center(
                      child: Text('data'),
                    ),
                  ),
                  Expanded(
                    child: TextButton(
                      onPressed: () {},
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.link),
                          Text('data'),
                        ],
                      ),
                    ),
                  ),
                  Expanded(
                    child: TextButton(
                      onPressed: () {},
                      child: Center(
                        child: Text('data'),
                      ),
                    ),
                  ),
                ],
              )),
        ),
      ),
    );
  }
}
