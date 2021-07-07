const createPassword = require("./createPassword");

const program = require("commander"); // code

program.version("1.0.0").description("Commander Password Generator Demo"); // code

// from the console: node index -h

/*
  Usage: index [options]

  Commander Password Generator Demo

  Options:
    -V, --version  output the version number
    -h, --help     display help for command
*/

// program
//   .command("generate")
//   .action(() => {
//     console.log("Generated!");
//   })
//   .parse(); // code

// from the console: node index generate

/*
  Generated!
*/

// program.option("-len, --length <number>", "length of password", "10").parse(); // code

// from the console: node index -h

/*
Usage: index [options]

Commander Password Generator Demo

Options:
-V, --version   output the version number
-len, --length  length of password
-h, --help      display help for command
*/

// console.log(program.opts()); // code

// from the console: node index

/*
  { length: '10' }
*/

// from the console: node index --length=24

/*
  { length: '24' }
*/

// program
//   .option("-len, --length <number>", "length of password", "10")
//   .option("-s, --save", "save password to db")
//   .option("-!n, --no-numbers", "generate password without numbers")
//   .option("-!sym, --no-symbols", "generate password without symbols")
//   .parse(); // code

// console.log(program.opts()); // code

// from the console: node index --length=24 --save

/*
{ length: '24', save: true }
*/

program
  .option("-len, --length <number>", "length of password", "10")
  .option("-s, --save", "save password to db")
  .parse(); // code

const { length, save, num, sym } = program.opts();

const generatedPassword = createPassword(length);
console.log(generatedPassword);
