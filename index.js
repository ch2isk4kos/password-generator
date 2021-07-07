#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Commander Password Generator Demo"); // code

// program
//   .command("generate")
//   .action(() => {
//     console.log("Generated!");
//   })
//   .parse(); // code

// program
//   .option("-len, --length <number>", "length of password", "10")
//   .option("-s, --save", "save password to db")
//   .option("-!n, --no-numbers", "generate password without numbers")
//   .option("-!sym, --no-symbols", "generate password without symbols")
//   .parse(); // code

program
  .option("-len, --length <number>", "length of password", "10")
  .option("-s, --save", "save password to db")
  .parse(); // code

const { length, save, num, sym } = program.opts();

const generatedPassword = createPassword(length);
if (save) savePassword(generatedPassword);

console.log(`${chalk.blue("Password:")} ${chalk.bold(generatedPassword)}`);

// after revisions to package.json
// from the console: npm link
