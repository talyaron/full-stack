// in ES5 constructors are a way to build classes We use classes to create
// objects with a set of defined methods. Objects like 'console' or 'array' or
// 'date'.
function dateAsObject() {
    var today = new Date();
    var today2 = new Date();

    console.log(today.getFullYear());
    console.log(today2.getFullYear());
}

// we can create classes for modular code writing. For instance UI Components
// (button, nav-bar, header etc.) in ES5 we use 'constructors' to create classes

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

var MobyDick = new Book('Moby Dick', 345, 1851, 'Herman Melville');
console.log(MobyDick.title, 'was written',  MobyDick.yearsFromPublication(), 'years ago');

var WarAndPeace = new Book('War and Peace', 1225, 1867, 'Leo Tolstoy');
console.log(WarAndPeace.title, 'was written',  WarAndPeace.yearsFromPublication(), 'years ago');

var books = new Object();
books['on_liberty'] = new Book('On Liberty', 250, 1859, 'John Stuart Mill');
console.dir(books);
console.log(books['on_liberty'].title, 'was written',  books['on_liberty'].yearsFromPublication(), 'years ago');
