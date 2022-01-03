
const delTag = document.querySelector("#del");
delTag.addEventListener("click",()=>{
    const screenTagvalue = document.getElementById("screen").value; // don't forgive to write this in the function;
    document.getElementById("screen").value = screenTagvalue.substr(0,screenTagvalue.length-1); // please care for writing method !
    console.log(screenTagvalue);
})


