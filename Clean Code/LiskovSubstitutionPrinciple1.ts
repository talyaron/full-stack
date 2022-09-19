// based on Cameron J. Leverett, 
//https://javascript.plainenglish.io/s-o-l-d-with-javascript-examples-e8a071345c8a


class Bird {  
    fly(){
        //..
    }
}

class Eagle extends Bird {
    dive(){
        //..
    }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penguin extends Bird{
   //Problem: Can't fly! 
}

