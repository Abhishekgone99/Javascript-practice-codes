//  DOM basics :- 

// console.log(document); returns whole document in console
// console.log(document.domain); returns the domain name
// console.log(document.URL);  returns the url of the page
// console.log(document.doctype); returns the document type of the page
// console.log(document.head); // returns the head of html
// console.log(document.body); // returns the body of html

 // document.write( "<br> <br> DOM CLASS ")  // to write somrthing in the document
 // document.writeln("<br> This is the first class ") // it is also used to write in the document

// document.title="Practice Class of Dom!!" // to change the title using js
// console.log(document.title);


//  DOM manipulation :-

// 1. document.getElementBYId :-

// // to change the content of the elements:-

// let element=document.getElementById("box1")
// element.textContent="Good evening!!"
// element.innerHTML="<a href=''>SEE YOU SOON </a>"
// element.innerText="Good BYE!!"

// // without declaring a variable :
// document.getElementById("box2").innerHTML="My name is Khan and i am not a terrorist."

// // To apply styles to the content inside the tags:

// let element1=document.getElementById("box1")
// element1.style.color="gold"
// element1.style.backgroundColor="silver"
// element1.style.fontSize="50px"
// element1.style.border="double 5px green"
// element1.style.textAlign="center"
// element1.style.textShadow="black 5px 10px 5px"


// // 2. document.getElementClassName  :- // for the same class name elements are in the form of array in html collection even if there is only one element
//                                        // her classname with box are 3 therefore length of array of boc classname is 3
// // To change the content :-

// let ele=document.getElementsByClassName("box")
// console.log(ele);         
// ele[0].textContent="Hey bro, Whats up!!!"
// ele[1].innerText=" I am good bro what about you and where r u bro."
// ele[2].innerHTML="<i> Control uday control </i>"

// // to apply styles :-

// let ele1=document.getElementsByClassName("title") // length of array with class name title is 1
// // ele1[0].style.color="purple"
// // ele1[0].style.backgroundColor="pink"
// // ele1[0].style.border="double 10px magenta"
// // ele1[0].style.padding="20px"
// // ele1[0].style.textAlign="center"

// for (let i = 0; i < ele1.length; i++) {
//     ele1[i].style.color="gray"
//     ele1[i].style.backgroundColor="pink"
//     ele1[i].style.border="double 10px magenta"
//     ele1[i].style.borderRadius="20px"
//     ele1[i].style.padding="20px"
//     ele1[i].style.textAlign="center"
    
// }


// 3. document.getElementsByTagName :- there are 2 h1 tags so it will be in the form of array in html collection

// To change the content :-

// let elemt=document.getElementsByTagName("h1")
// console.log(elemt);
// elemt[0].textContent="Where is the new building"
// elemt[1].innerHTML="<ul type='square'><li> It is in Basvannagudi</li><ul>"

// // to apply styles to content :-

// let elemt1=document.getElementsByTagName("h1")
// for (let i = 0; i < elemt1.length; i++) {
//     elemt1[i].style.backgroundColor="aqua"
//     elemt1[i].style.border="solid 5px brown"
// }

// 4. document.querySelector :- we can take both classname and id name but mention .class or #id

// to change the content :-

// let query=document.querySelector(".box")
// console.log(query);
// query.textContent="abbey yaar bore ho raha hu ye kartr karte"

// // to apply styles:-

// query.style.backgroundColor="blue"
// query.style.border="double 5px aqua"


// 5. document.querySelectorAll :-

// let queryall=document.querySelectorAll(".box")
// queryall[0].innerHTML="<b> this is javascript dom class</b>"
// queryall[1].innerHTML="<b> abbey ye to copy he upar kathis is javascript dom class</b>"
// queryall[2].innerHTML="ye kya he"

// for (let i = 0; i < queryall.length; i++) {
//     queryall[i].style.border="double 5px black"
//     queryall[i].style.backgroundColor="pink"
// }