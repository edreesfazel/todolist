var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    var taskText = taskInput.ariaValueMax;
    if (taskText.trim() !== "" ) {
        var taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.addEventListener("click", toggleTask);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function toggleTask(event) {
    var taskItem = event.target;
    taskItem.classList.toggle("completed");
}













































/* // retrieve references to specific elements in index.html
var taskInput = document.getElementById("taskInput");
// this ^ line uses the getElementById method to retrieve the
// element with the ID "taskinput" and assigns it to the taskInput
//variable. The element with this ID is an input field for the user
var addButton = document.getElementById("addButton");
// this line ^ uses the getElementById method to retrieve the 
// element with the Id "addbutton"
var taskList = document.getElementById("taskList");

// now we want to add an event listner to the "addButton" element
// so that when the user clicks it, "something" happens

addButton.addEventListener("click", addTask);
// this ^ is a method that allows you to listen for specific events
// it takes two parameters, the event to listen for and the function
// to execute when the event occurs. "click" is the event being
// listened for. in this case, it is the "click" event, which 
// triggers when the button is clicked by the user.
// addTask is the function that will be executed when the "click"
// event occurs. in this context, we haven't defined addTask yet


function addTask() { 
    var taskText = taskInput.value 
    // ^ this line retrieves the value entered in 'taskInput' element
    // and assigns it to the 'taskText' variable
    if (taskText.trim() !== "") {
        var taskItem = document.createElement("li");
        // ^this line creates a new list item 'li' using the
        //createElement method of the 'document' object
        // this represents the new task in the to do list
        taskItem.textContent = taskText;
        // here we want to assign the value of taskText to be the
        //text in our taskItem variable
        taskItem.addEventListener("click", toggleTask);
        // add an event listener to the taskItem elment, associating
        // the toggleTask function with the click event
        taskList.appendChild(taskItem);
        // append the taskItem to the taskList element, which
        // in our HTML is an unordered list
        taskInput.value = "";
        //this line clears the value of the taskInput element, resetting
        // it to an empty string
    }

}

function toggleTask(event) {
    var taskItem = event.target; 
    //this line retrieves the element that triggered the event
    // which in this case is the task item that was clicked
    taskItem.classList.toggle("completed");
    // toggle the presence of the CSS class "completed" on the 
    // 'taskItem' element
} */