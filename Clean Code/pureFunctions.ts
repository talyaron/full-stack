let mathResult:number|null = null;

function multi(a:number,b:number):void{
    mathResult = a*b;
}
//non-pure
multi(5,9);

//pure functions
function pureMulti(a:number,b:number):number{
   return a*b;
}

mathResult = pureMulti(2,3);

