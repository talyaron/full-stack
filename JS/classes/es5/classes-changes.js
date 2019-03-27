function Book (title, numberOfPages, yearOfPublication, author){
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.yearOfPublication = yearOfPublication;
    this.author = author;
    this.currentDate = new Date();
    
    this.yearsFromPublication = function(){        
        var yearsPast = this.currentDate.getFullYear() - this.yearOfPublication;
        return yearsPast;
    }
} 

//declare instance objects
var MobyDick = new Book('Moby Dick', 345, 1851, 'Herman Melville');
var WarAndPeace = new Book('War and Peace', 1225, 1867, 'Leo Tolstoy');
var books = new Object();
books['on_liberty'] = new Book('On Liberty', 250, 1859, 'John Stuart Mill');

//how can we change properties of instance?
MobyDick.title = 'Moby the great whale'
console.log(MobyDick.title);

//We can see the constructor:
console.log (MobyDick.constructor);

//We can add proprties to constructors and they will propogate to instances:
Book.prototype.publication = 'publication';
console.log (MobyDick.publication);

//We can add methods to constructors:
Book.prototype.reply = function(){
    console.log(this.title, 'was written',  this.yearsFromPublication(), 'years ago')
};

MobyDick.reply();


//we can add new props to instances
MobyDick.price = 20;
console.log(MobyDick.price);
console.log(WarAndPeace.price);

//We can add props to Constractor, and influance the instances
Book.prototype.price = 30;
console.log(MobyDick.price);
console.log(WarAndPeace.price);



//Recommended reading: http://tobyho.com/2010/11/22/javascript-constructors-and/

//Exercise: create a class for rendering tables of numbers from objects.
//The table should be able to give sum of the numbers at the end of the table, if the user wishes to.
//The class should check if the object has the right data for tables.


