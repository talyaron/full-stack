const express = require('express');
const app = require('express')()



// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie

  console.log(req.cookies)
  var cookie = req.cookies.x§;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});


app.use(express.static('public'))

app.listen(3000, ()=>{console.log('listen on 3000')})