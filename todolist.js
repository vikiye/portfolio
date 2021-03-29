const form = document.querySelector('form')
const ul = document.querySelector('ul')
const completedUl = document.querySelector('#completedul')
const button = document.querySelector('#clearall')
const alldonebtn = document.querySelector('#alldone')
const input = document.getElementById('item')
const norecordbtn = document.querySelector('#norecord')
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))


const liMaker = (text) => {
  const li = document.createElement('li')
  var deletebtn = document.createElement('button')
  var donebtn = document.createElement('button')
 
  deletebtn.innerText = 'Delete'
  deletebtn.className = 'delbtn'
  donebtn.innerText = 'Done'
  donebtn.className = 'donebtn'
  li.textContent = text
  li.appendChild(deletebtn)
  li.appendChild(donebtn)
  ul.appendChild(li)
  var close = document.getElementsByClassName("delbtn");
  var done = document.getElementsByClassName('donebtn');
  //
 donebtn.addEventListener('click',function(){
   if (itemsArray.length <= 1  ){

   document.getElementById('clearall').style.display ='none';}
 })
 if (itemsArray.length >= 1 ){
  document.getElementById('clearall').style.display ='block';
 }
 //
 deletebtn.addEventListener('click',function(){
  if (itemsArray.length <= 1  ){

  document.getElementById('clearall').style.display ='none';}
})
if (itemsArray.length >= 1 ){
 document.getElementById('clearall').style.display ='block';
}
//
  var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    ul.removeChild(div);
    var z = div.firstChild.nodeValue;
    var index = itemsArray.indexOf(z);
    console.log(z)
   console.log(index)
  itemsArray.splice(index,1);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    console.log(itemsArray);
  }
  done[i].onclick = function(){
 
  var div1 = this.parentElement;
  
  var remove = div1.removeChild(div1.childNodes[1]);
  var remove = div1.removeChild(div1.childNodes[1]);
  var realdelete = document.createElement('button');

    var z = div1.firstChild.nodeValue;
    var index = itemsArray.indexOf(z);
    console.log(z)
   console.log(index)
  itemsArray.splice(index,1);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    console.log(itemsArray);
  realdelete.addEventListener("click", deleteTask);   
  realdelete.innerText = 'Delete';
  realdelete.className = 'realdelbtn';
  div1.appendChild(realdelete)
  completedUl.append(div1);
 
  
  }
} 
}
var deleteTask = function() {
  console.log("Delete task...");
   var li = this.parentNode;
  
    var a = li.firstChild.value;
    var index = itemsArray.indexOf(a);
     console.log(a)
   console.log(index)
  itemsArray.splice(index,1);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    console.log(itemsArray);
  completedUl.removeChild(li);
  console.log(itemsArray);
  }

form.addEventListener('submit', function (e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach((item) => {
  liMaker(item)
})

button.addEventListener('click', function () {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  document.getElementById('clearall').style.display='none';
  }
})

 
 
norecordbtn.addEventListener('click', function () {
  localStorage.clear()
  while (completedUl.firstChild) {
    completedUl.removeChild(completedUl.firstChild)
  }
})
