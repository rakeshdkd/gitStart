// EXAMINE THE DOCUMENT OBJECTS.
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="dom manipulation"

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.textContent="Hello....!");
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);



// GET ELEMENT BY ID.
// const heading = document.getElementById('main-header');
// heading.innerText = 'hELLO....!';
// heading.textContent = 'gOODBYE...!';
// heading.innerHTML = "<h2>Yeaiiiii...!</h2>"
// heading.innerHTML = "Yeaiiiii...!";

// heading.style.borderBottom = "8px solid black"
// console.log(heading);

// GET ELEMENT BY CLASS NAME.
// var item = document.getElementsByClassName('list-group-item')
// console.log(item)
// item[2].style.backgroundColor='green'

// for(let i=0; i<item.length; i++){
//     item[i].style.fontWeight='bold'
//     item[i].style.color='#1b99'

// }
// var title= document.getElementsByClassName('title');
// console.log(title);
// console.log(title[0]);

// title[0].style.color='green'
// title[0].style.fontWeight='bold'

// GET ELEMENT BY TAG NAME.
// var li = document.getElementsByTagName('li');
// li[0].style.backgroundColor = "red"
// console.log(li[0])
// console.log(li)

// QUERYSELECTORALL && QUERYSELECTOR

// var item = document.querySelectorAll(".list-group-item");


// this is important:-
// var submit = document.querySelector('input[type="submit"]');

// submit.value = 'SEND';
// var item = document.querySelector('.list-group-item');
// item.style.color = '#bc21';
// submit.addEventListener(('mouseover'),(event) =>{
//     submit.style.backgroundColor='green'
// })

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondChild = document.querySelector('.list-group-item:nth-child(2)'); // This nth child getting process is very important.
// secondChild.style.color = "coral"

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles.textContent= 'Hello.....!';

// var odd = document.querySelectorAll('li:nth-child(odd'); // This odd even is important in form.
// var even = document.querySelectorAll('li:nth-child(even');
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor='#f4f4f4'
//     even[i].style.backgroundColor='#ccc'
// }


// GET ELEMENT BY QUERYSELECTOR:=
// var item = document.querySelector('.list-group-item:nth-child(2)');
// item.style.backgroundColor='green';

// var item = document.querySelector('.list-group-item:nth-child(3)');
// item.style.color='white';


// GET ELEMENT BY QUERYSELECTORALL:-

// var item = document.querySelectorAll('.list-group-item');
// item[1].style.color='green';

// var items = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i=0; i<items.length; i++){
// items[i].style.backgroundColor='green'
// }


// TRAVERS THE DOM:

var itemList = document.querySelector('#items');

// Parent node :- This is a very important thing to get any parent node.
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#cbc"
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

// Prent element
console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor="#cbc"
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement.parentElement);

// child node: This may create some problems so avoide using this, instead use children
// console.log(itemList.childNodes); // it show line break as childnodes this may creat problem to you.


// // CHILDREN :-

// console.log(itemList.children); // it gives us the childrens only. HTML collection.
// console.log(itemList.children[1]);
// itemList.children[0].style.backgroundColor="yellow"

// FIRSTchild:-
// console.log(itemList.firstChild)
// itemList.firstElementChild.textContent="Hello...!"

// firstElementChild:-
// console.log(itemList.firstElementChild);

// // lastChild:-
// console.log(itemList.lastChild) // this gives the type of child element

// // lastElementChild:-
// console.log(itemList.lastElementChild); // this gives Whole element.
// itemList.lastElementChild.textContent="hello...!"

// nextSibling:
// console.log(itemList.nextSibling); // try not to use this

// // nextElementSibling:
// console.log(itemList.nextElementSibling); // always try to use this only.

// // previoussibling:-
// console.log(itemList.previousSibling);

// // previousElementsibling:-
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="red"

/*
// CREATE ELEMENT : yaha hum element create kr rhe h.
var newDiv = document.createElement('div');
// add class to it 
newDiv.className = "hello1";

// add id to it
newDiv.id = "hello";

// add atribute to it:- The setAttribute method is a JavaScript method that is used to set the value of a specified attribute on a given element in the Document Object Model (DOM) yaha hum class ko ese bhi add kr skte the newDiv.setAttribute('class', 'hello1');.
newDiv.setAttribute('title', 'Hello div1');
console.log(newDiv);


// create text node: yaha hum text node bana rhe h 
var newDivText = document.createTextNode('Hello world');
console.log(newDivText)

// Add text to newDiv. yaha hum text ko element m append kr rhe h.
newDiv.appendChild(newDivText);
console.log(newDiv)

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// How to add any element
container.insertBefore(newDiv, h1)
newDiv.style.fontWeight="bold"
newDiv.style.color="red"

//-----------------

var newDiv1 = document.createElement('div');
// add class to it 
newDiv1.className = "hello";

// add id to it
newDiv1.id = "hello1";

// add atribute to it
newDiv1.setAttribute('title', 'Hello div');


// create text node: yaha hum text node bana rhe h 
var newDivText1 = document.createTextNode('Hello world...!');
console.log(newDivText1)

// Add text to newDiv. yaha hum text ko element m append kr rhe h.
newDiv1.appendChild(newDivText1);
console.log(newDiv1)


var ul = document.querySelector('div .list-group');
var li = document.querySelector('div li');
// var itm = document.querySelector('.list-group-item');
ul.insertBefore(newDiv1,li);

newDiv1.style.fontSize="21px"
newDiv1.style.fontWeight="bold"
newDiv1.style.color="blue"
*/