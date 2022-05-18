
//input element as a DOM element
let myTask = document.querySelector("#task")
//ul as a DOM element  
let ulDOM = document.querySelector("#list")

//Add button onclick event function
function newElement(){
    //give alert if input element is empty
    if (myTask.value == ""){
        $(".error").toast("show")
        
    }
    else if(myTask.value !=""){ // go on, unless input element is empty
        //create div element
        let divToDo = document.createElement("div")
        divToDo.classList.add("li-item","d-flex","bg-secondary")
        //create li element and add to div
        let liDOM = document.createElement('li')
        liDOM.classList.add("todo-item","bg-secondary")
        liDOM.innerText = myTask.value //add input content to li
        divToDo.append(liDOM)
        liDOM.addEventListener("click", doneListItem) // make it checked if the item done (check action)
        //create button element 
        let delBtn = document.createElement("button")        
        delBtn.innerText ="X"
        delBtn.classList.add("btn-danger","btn-delete","ml-auto")
        divToDo.append(delBtn)//button added to div
        delBtn.addEventListener("click", deleteListElement); // delete action 

        //div added to ul as a new list item
        ulDOM.append(divToDo)
        //make the input element empty
        myTask.value=""

        $('.success').toast("show")//show toast when 
    }    
}

//check action function
function doneListItem(e){
	e.target.classList.toggle("checked");
}
//delete action function
function deleteListElement(){
    this.parentElement.remove();  
  }

//loading new item to the localStorage
function loadStorage(text){
    let str = JSON.parse(localStorage.getItem("todo"))
    let toDos;

    if(str == null){
        toDos = []
    }else {
        toDos = getStorage() //call getStorage function
    }

    toDos.push(text)
    localStorage.setItem("todo", JSON.stringify(toDos))
}

//written for getting item form localStorage
function getStorage(){
    let toDo = JSON.parse(localStorage.getItem("todo"))
    return toDo
}


/*FUNCTIONS TO BE USED FOR LOCAL STORAGE IF NECESSARY*/
//loading items back to page
function loadItems(){
    let toDo = getStorage()

    if (toDo != null){
        for(let i=0; i<toDo.length; i++){
            //create div element
            let todoDiv = document.createElement("div")
            todoDiv.classList.add("d-flex","bg-secondary")
            //create li element and add to div
            let liDOM = document.createElement('li')
            liDOM.classList.add("bg-secondary")
            liDOM.innerText = toDo[i] //add input content to li
            todoDiv.append(liDOM)
            liDOM.addEventListener("click", doneListItem) // make it checked if the item done (check action)
            //create button element 
            let deleteBtn = document.createElement("button")        
            deleteBtn.innerText ="X"
            deleteBtn.classList.add("btn-danger","btn-delete","ml-auto")
            todoDiv.append(deleteBtn)//button added to div
            deleteBtn.addEventListener("click", deleteListElement); // delete action 

            //div added to ul as a new list item
            ulDOM.append(todoDiv)
        }
    }
}

function deleteStorage(text){
    let toDo = getStorage() //bring storage and assign toDo

    toDo.foreach((item, index)=>{  //loop in toDo and delete each item which equals to text

        if(item === text){
            toDo.splice(index,1)
        }  

    });
localStorage.setItem("todo", JSON.stringify(toDo)) //set new toDo to the storage
}