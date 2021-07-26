//based on https://flutter.dev/docs/get-started/flutter-for/react-native-devs#how-do-i-fetch-data-from-api-calls
import 'package:flutter/material.dart';
import 'dart:io';
import 'dart:convert' show utf8, jsonDecode;
import 'package:http/http.dart' as http;
import 'package:flutter/foundation.dart' show kIsWeb;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  void initState() {
    print('init state');
    super.initState();
    _getIPAddress();
  }

  int _counter = 0;
  String _ipAddress = '';

  void _getIPAddress() async {
    var url = Uri.parse('https://httpbin.org/ip');
    String ip = '';
    if (kIsWeb) {
      print('web....');
      // running on the web!
      var response = await http.get(Uri.parse('https://httpbin.org/ip'));
      if (response.statusCode == 200) {
        // If the server did return a 200 OK response,
        // then parse the JSON.
        print(jsonDecode(response.body));
        print(jsonDecode(response.body)['origin']);
        setState(() {
          _ipAddress = jsonDecode(response.body)['origin'];
        });
      } else {
        // If the server did not return a 200 OK response,
        // then throw an exception.
        throw Exception('Failed to load ip address');
      }
    } else {
      // NOT running on the web! You can check for additional platforms here.
      var httpClient = HttpClient();
      var request = await httpClient.getUrl(url);
      var response = await request.close();
      var responseBody = await response.transform(utf8.decoder).join();
      ip = jsonDecode(responseBody)['origin'];
      setState(() {
        _ipAddress = ip;
      });
    }
  }

 

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('Your Ip address is $_ipAddress'),
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

class IpAdrress {
  String origin = '';

  IpAdrress({required this.origin});

  factory IpAdrress.fromJson(Map<String, dynamic> json) {
    return IpAdrress(
      origin: json['origin'],
    );
  }
}
