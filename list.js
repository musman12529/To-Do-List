


function printer(){
    let htmlconcat= "";

    for(let i=0; i<doList.length;i++){
        let name = doList[i].name;
        let date= doList[i].duedate;
        const html= `<div class="grid-item" ><p class="js-name" >${name}</p></div>
        <div class="grid-item"><p class="js-date">${date}</p></div>
        <div class="grid-item"><button class="deleteb"onclick="deleteItem(${i});">Delete</button></div>
        `
        htmlconcat=htmlconcat + html;
    }
    document.querySelector(".printedList").innerHTML= htmlconcat;
}

let doList=[];

function Adder(){
    const task = document.querySelector(".input");
    const name= task.value;
    const due=document.querySelector(".datee");
    const duedate=due.value;
    doList.push({name,
    duedate});
    console.log(doList);
    task.value="";
    due.value="";
    console.log(doList)
    printer();
    saveToLocalStorage() 
    

}


function saveToLocalStorage() {
    localStorage.setItem("doList", JSON.stringify(doList));
}
document.addEventListener("DOMContentLoaded", function () {
    const savedList = localStorage.getItem("doList");
    if (savedList) {
        doList = JSON.parse(savedList);
        printer();
    }
});


function deleteItem(index) {
    doList.splice(index, 1);
    saveToLocalStorage();
    printer();
}




