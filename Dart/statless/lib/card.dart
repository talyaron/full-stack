import 'package:flutter/material.dart';

class MyCard extends StatefulWidget {
  final String title;

  MyCard({ Key key, this.title }): super(key: key);

  // static const String _title = 'Flutter Code Sample';

  @override
  _MyCardState createState() => _MyCardState();
}

class _MyCardState extends State<MyCard> {
  @override
  // Widget build(BuildContext context) {
  Widget build(BuildContext context) {
    return Text(widget.title); // uses the value
  }
  // return Center(
  //     child: Card(
  //   child: InkWell(
  //     splashColor: Colors.blue.withAlpha(30),
  //     onTap: () {
  //       print('Card tapped.');
  //     },
  //     child: const SizedBox(
  //       width: 300,
  //       height: 100,
  //       child: Text(widget.text),
  //     ),
  //   ),
  // ));
  // }
}
