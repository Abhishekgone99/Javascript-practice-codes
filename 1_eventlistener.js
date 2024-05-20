// 1. by directly using typeof event inside the tag and calling the function in js

// message=()=>{
//  alert("submitted successfully")
//  let body=document.getElementsByTagName("body")
//  body[0].style.backgroundColor="aqua"
// }

// description=()=>{
//     alert("reset done")
//     let page=document.getElementById("page")
//     page.style.color="gold"
//     page.style.backgroundColor="olive"
// }


// 2. by using addeventListener method

let element=document.getElementById("btn")
// element.addEventListener('click',message)
element.addEventListener('dblclick',message)

function message() {
    alert("clicked by me")
    let page=document.getElementById("page")
    page.style.backgroundColor="olive"
}