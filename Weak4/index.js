const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

  

  // Count words in a file

  

program.command('count-words')
.description('Count the number of words in a file')
.argument('<file>', 'file to count words')
.action((file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error: ${err.message}`);
    } else {
      const words = data.split(' ').filter(word => word).length; 
      console.log(`There are ${words} words in ${file}`);
    }
  });
});





program.parse();