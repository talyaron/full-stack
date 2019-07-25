export class Book {
    id:string;
    title:string;
    author: string;
    yearOfPublication: number;

    constructor(id:string, title:string, author:string, yearOfPublication:number){
        this.id = id;
        this.title= title;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
    }
}