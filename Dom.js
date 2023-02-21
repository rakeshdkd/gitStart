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
var li = document.getElementsByTagName('li');
li[0].style.backgroundColor = "red"
console.log(li[0])
console.log(li)

// QUERYSELECTORALL && QUERYSELECTOR

// var item = document.querySelectorAll(".list-group-item");


// this is important:-
var submit = document.querySelector('input[type="submit"]');

submit.value = 'send';
var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondChild = document.querySelector('.list-group-item:nth-child(2)'); // This nth child getting process is very important.
secondChild.style.color = "coral"

var titles = document.querySelectorAll('.title');
console.log(titles);
titles.textContent= 'Hello.....!';

var odd = document.querySelectorAll('li:nth-child(odd'); // This odd even is important in form.
var even = document.querySelectorAll('li:nth-child(even');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='#f4f4f4'
    even[i].style.backgroundColor='#ccc'
}












