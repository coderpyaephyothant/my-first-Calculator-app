
const delTag = document.querySelector("#del");
const oneTag = document.getElementById("one");
const twoTag = document.getElementById("two");
const threeTag = document.getElementById("three");
const circleTag = document.getElementsByClassName("circle")[0];

delTag.addEventListener("click",()=>{
    const screenTagvalue = document.getElementById("screen").value; // don't forgive to write this in the function;
    document.getElementById("screen").value = screenTagvalue.substr(0,screenTagvalue.length-1); // please care for writing method !
    console.log(screenTagvalue);
})





oneTag.addEventListener("click",()=>{
    console.log("you clicked one tag right now");
    const bodyTag = document.body; // I can call body only this!
    bodyTag.classList.add("active1");
    bodyTag.classList.remove("active2");
    bodyTag.classList.remove("active3");
    circleTag.classList.add("circle");
    circleTag.classList.remove("change");
    circleTag.classList.remove("change1");
});

twoTag.addEventListener("click",()=>{
    console.log("you clicked one tag right now");
    const bodyTag = document.body; // I can call body only this!
    bodyTag.classList.add("active2");
    bodyTag.classList.remove("active1");
    bodyTag.classList.remove("active3");
    circleTag.classList.add("change");
    circleTag.classList.remove("change1");
    circleTag.classList.remove("circle");
});

threeTag.addEventListener("click",()=>{
    console.log("you clicked one tag right now");
    const bodyTag = document.body; // I can call body only this!
    bodyTag.classList.add("active3");
    bodyTag.classList.remove("active2");
    bodyTag.classList.remove("active1");
    circleTag.classList.add("change1");
    circleTag.classList.remove("circle");
    circleTag.classList.remove("change");
});

