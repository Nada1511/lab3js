///////////////////////////////// EX 1: ///////////////////////////////////////////////////////////

let user1 = {
    name:'nada',
    phone:'015558888',
}

//1. create () //////////////////
let user2=Object.create(user1); //// copy user1 in user2
console.log(user2);


//2.  assign () ////////////////////
let user3={};
Object.assign(user3, user1); ///copies all enumerable own properities from one or more source objects to a target object 
console.log(user3);


//3.  keys()////////////////////
let person={
    firstname:"nada",
    lastname:"saeed",
    age:22,
};

let key=Object.keys(person); //// method returns an array iterator with the keys of an object.
console.log(key);


//4.  defineproperty

Object.defineProperty(person, "id" ,{
    value:11111
});

console.log(person. id ); /////////////////////


//5.  prototype   ////// used to add a new property 

function employee(name1 ,jobtitle, born){
    this.name1=name1;
    this.jobtitle=jobtitle;
    this.born=born;
}
employee.prototype.salary=2000;  
const f =new employee("nada","doc",2001);


//6. entries()

const myobj={a:1 ,b:2 , c:3};

const entries=Object.entries(myobj); ///////////method that returns an array of a given object own enumerable property
console.log(entries); ////   output [['a',1],['b',2],['c',3]]


//7. values()     /////////// method in javascript is used to extract the values of an object and return them as an array 
var newarr= Object.values(myobj); /////// output [1,2,3]


//8. freeze()
Object.freeze(user1);  /////method is used to freeze an object. freezing an object means that no new properities added to it 



//9. seal()  method is used to seal an object means that you cannot add new properties to it 

var objecti={
    a:1,
    b:2,
};
Object.seal(objecti);
objecti.c=3

console.log(objecti);    /////output :{a:1,b:2}


//10.  hasOwnproperty(prop)  ///////method used to check whether an object has a property with a specified name as is own property

console.log(objecti.hasOwnProprty('a'));  ///output: true








////////////////////////////////// EX 2: ////////////////////////////////////////////////////////////////////////

let names=[];

let numberofnames=prompt("enter the number of names ");
for(let i=0;i<numberofnames;i++){
    let username =prompt("enter the name  "+i);
    names.push(username);

}
/////// search in array 1. indexof => search in an element in array and return the index of this element//////////////
// 1. index of
alert(names.indexOf('nada'));
alert((names.indexOf('bassant',1))); ///////search of name bassant from index 1


//2. lastindexof() search for element from the last of the array.
alert(names.lastIndexOf('nada',-2));


//3.includes() check if element is in array or not and return true or false.
alert(names.includes('nada'));  //true


//4. sort()  used to sort the array alphaptically.

alert(names.sort());

//5. pop () removes the last element from an array 
alert(names.pop());

//6. push()   used to add elements in the array (at the end of the array )
alert(names.push('alaa'));

//7. slice()    slices out a piece of an array into a new array.
alert(names.slice(0,3));  //inn here start from the index 0 and not including the element in index 3


//8. join()  method join all array element into a string 
alert(names.join("*"));

//9. shift() method removes the first array element 
alert(names.shift());

//10. unshift() method adds a new element to an array (at the beginning)
alert(names.unshift('samar'));

while(true){
var y= confirm("Exit when enter ok")

if(y){
  break;  
}}




////////////////////////////////Ex3 /////////////////////////////////////////////////////////////////

/// Closures  refers to the ability of a function to access variablrs from its
// outer scope even after that scope has finished executing.

function outer(){
    let x = 10;
    let y= 100;
    return function(){
        console.log(y);
    }
}

let myfunc =outer();
console.dir(myfunc);





