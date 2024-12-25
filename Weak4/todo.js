const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

const FILE_NAME = 'todos.json';

// Helper function to load todos from the file
function loadTodos() {
  if (!fs.existsSync(FILE_NAME)) {
    fs.writeFileSync(FILE_NAME, JSON.stringify([]));
  }
  const data = fs.readFileSync(FILE_NAME, 'utf8');
  return JSON.parse(data);
}

// Helper function to save todos to the file
function saveTodos(todos) {
  fs.writeFileSync(FILE_NAME, JSON.stringify(todos, null, 2));
}

program
  .name('todo-cli')
  .description('A simple filesystem-based to-do list CLI')
  .version('1.0.0');

// Command to add a to-do
program.command('add')
  .description('Add a new to-do')
  .argument('<task>', 'Task description')
  .action((task) => {
    const todos = loadTodos();
    todos.push({ id: todos.length + 1, task, done: false });
    saveTodos(todos);
    console.log(`Added: "${task}" `);
  });

// Command to delete a to-do
program.command('delete')
  .description('Delete a to-do by ID')
  .argument('<id>', 'ID of the to-do to delete')
  .action((id) => {
    const todos = loadTodos();
    const newTodos = todos.filter(todo => todo.id !== parseInt(id));
    if (newTodos.length === todos.length) {
      console.log(`To-do with ID ${id} not found.`);
    } else {
      saveTodos(newTodos);
      console.log(`Deleted to-do with ID ${id}`);
    }
  });

// Command to mark a to-do as done
program.command('done')
  .description('Mark a to-do as done by ID')
  .argument('<id>', 'ID of the to-do to mark as done')
  .action((id) => {
    const todos = loadTodos();
    const todo = todos.find(todo => todo.id === parseInt(id));
    if (todo) {
      todo.done = true;
      saveTodos(todos);
      console.log(`Marked to-do with ID ${id} as done.`);
    } else {
      console.log(`To-do with ID ${id} not found.`);
    }
  });

// Command to list all to-dos
program.command('list')
  .description('List all to-dos')
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log('No to-dos found.');
    } else {
      console.log('To-dos:');
      todos.forEach(todo => {
        console.log(`${todo.id}. [${todo.done ? '✔' : ' '}] ${todo.task}`);
      });
    }
  });

program.parse();



// Program to Find Words in a File


// const fs = require("fs");

// function main(fileName) {

//     fs.readFile(fileName, "utf-8", function (err, data)  {

//         let total = 0;
//         for (let i = 0; i <= data.length; i++) {

//             if (data[i] === " ") {
//                 total++;
//             }
//         }
//         console.log(total+1);
//     })

// }


// main("file.txt");