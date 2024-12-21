var Name = "Rajneesh";
let currentIndex = 1;
let currentNumber = 1;

// console.log(document);

// function addTodo() {
//     const inputEL = document.querySelector("input");

//     const value = inputEL.value;

//     console.log(value);
// }

// Assignment Add Counter which update time value after 1 second

// function timer() {

//     const time = document.querySelector("#time");

//     let currentTime = time.innerHTML;

//     currentTime++;

//     time.innerHTML = currentTime;

// }

// setInterval(timer, 1000);

// timer()

function addTodo() {
  //   const inputEL = document.querySelector("input");
  //   const newEl = document.createElement("div");
  //   const btnd = document.createElement("button");

  //   btnd.innerHTML = "Delete";

  //   newEl.innerHTML = inputEL.value;

  //   console.log(newEl);

  //   const el = document.getElementById("todos");

  //   el.appendChild(newEl);
  //   el.appendChild(btnd);

  const inputEl = document.getElementById("inp");
  const textNode = document.createElement("div");

  if (inputEl.value === "") {
    alert("Please Enter Todo Item First");
  } else {
    textNode.innerHTML =
      "<div id='todo-" +
      currentIndex +
      "'><h4>" +
      currentNumber +
      ". " +
      inputEl.value +
      '</h4><button onclick="deleteTodo(' +
      currentIndex +
      ') ">Delete</button>' +
      ' <button onclick="updateTodo(' +
      currentIndex +
      ')">Update</button>';
    console.log(textNode);
    const parentEl = document.getElementById("todos");

    parentEl.appendChild(textNode);

    currentIndex = currentIndex + 1;
    currentNumber++;
  }
}

function updateTodo(index) {
  const up = document.getElementById("todo-" + index);

  if (up) {
    // up.innerHTML="";

    const newInput = prompt("Enter the updated todo:");
    if (newInput) {
      up.innerHTML = `<h4> ${currentNumber}. ${newInput}</h4>
            
             <button onclick="deleteTodo(${index})">Delete</button>
                <button onclick="updateTodo(${index})">Update</button>
            `;
    }
  }
  if (up.innerHTML === "") {
    alert("Please Update Value");
  }
}

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  if (element) {
    const parentElement = element.parentNode;
    parentElement.parentNode.removeChild(parentElement);

    index === 0;
  }
}
