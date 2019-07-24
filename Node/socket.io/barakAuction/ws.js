var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//based on https://socket.io/get-started/chat/

let items = [];
 
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  //item message - add item to array
  socket.on('item message', function(useritem){
    useritem = JSON.parse(useritem);
    io.emit('item message', addToOrUpdateItems(useritem));
  });
  
  //buy message - remove item from array
  socket.on('buy message', function(useritem){
    useritem = JSON.parse(useritem);
    io.emit('buy message', buyItem(useritem));
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


//functions

function returnIndexOfItem(item){

  let status = false;
 
  //check if the item appear in aray items
  for(let i=0; i<items.length; i++){
    let curritem = items[i];
    if(item.userid === curritem.userid && item.item === curritem.item){
      status = i;
      break;
    }
  }
 
  //status mey return false if not dound or place in array
  return status;
}

function addToOrUpdateItems (item){
  
  let indexOfItem = returnIndexOfItem(item);
  let itemMessage = "";

  if(indexOfItem !== false){
    itemMessage = updatePrice(item,indexOfItem);
  } else {
    itemMessage = addItemToItems(item);
  }

  return itemMessage;
}

function updatePrice(item,indexOfItem){

  let itemMessage = "";

  if(parseInt(item.price) > parseInt(items[indexOfItem].price)){
    items[indexOfItem].price = item.price;
    itemMessage = "user:" + item.userid + ", for item: " + item.item + " updated price to: " + item.price; 
  }

  return itemMessage;
}

function addItemToItems(item){
  let itemMessage = ""; 

  items.push(item);
  itemMessage = "user:" + item.userid + " added item: " + item.item + " for price: " + item.price; 
  
  return itemMessage;
}

function buyItem (item){
  let indexOfItem = returnIndexOfItem(item);
  let buyMessage = "";

  if(indexOfItem !== false){
    buyMessage = removeFromItems(item,indexOfItem);
  } else {
    buyMessage = "not a valid buy for user:" + item.userid + " ,item: " + item.item + " ,price: " + item.price;  
  }

  return buyMessage;
}

function removeFromItems(item,indexOfItem){
  let buyMessage = "";

  if(parseInt(item.price) > parseInt(items[indexOfItem].price)){
    items.splice(i);
    buyMessage = "user:" + item.userid + " bought item: " + item.item + " for price: " + item.price;  
  }

  return buyMessage;
}