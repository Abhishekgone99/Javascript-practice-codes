// let ele=document.getElementById("box1")
// ele.addEventListener('mouseenter',message)
// function message(e){
//     console.log(e.type);
// }

// let ele=document.getElementById("box1")
// ele.addEventListener('mouseleave',message)
// function message(e){
//     console.log(e.type);
// }

// let ele=document.getElementById("box1")
// ele.addEventListener('mouseout',message)
// function message(e){
//     console.log(e.type);
// }

// let ele=document.getElementById("box1")
// ele.addEventListener('mouseover',message)
// function message(e){
//     console.log(e.type);
// }



// parent node :

// let element=document.getElementById('box1')
// let element=document.getElementById('b3')
// console.log(element.parentNode,"parent");

// children :

// let ele=document.getElementById('box1')
// console.log(ele.children,"all childrens");
// console.log(ele.firstElementChild,"first child");
// console.log(ele.lastElementChild,"last child");


// creating and new elements using html :-

// 1. lets create a paragraph tag :

let newElement=document.createElement('p')
newElement.className="pa"
// newElement.id="pa1"
newElement.setAttribute("id","pa1") // anotherway to give class and id to a element we created 

// 2. giving content to the tag

newElement.textContent="we are creating the tags/elements using the JS"
//console.log(newElement);  // this will show only in console

// 3. adding the tag to the html document

// let newele=document.getElementById("box1")
// document.body.insertBefore(newElement,newele)
// console.log(newElement);
