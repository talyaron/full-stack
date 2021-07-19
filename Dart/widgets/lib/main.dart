import 'package:flutter/material.dart';

//https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter 2',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: const Center(
          child: Text('Hello World'),
        ),
        bottomNavigationBar: BottomAppBar(
          shape: const CircularNotchedRectangle(),
          child: Container(
              height: 50.0,
              child: Row(
                children: [
                  Expanded(
                    child: TextButton(
                      onPressed: () {},
                      child: Center(
                        child: Text('data'),
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
                   Expanded(
                    child: TextButton(
                      onPressed: () {},
                      child: Center(
                        child: Text('data'),
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
