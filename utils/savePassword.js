const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const savePassword = (password) => {
  fs.open(path.join(__dirname, "../db.txt"), "a", 755, (e, id) => {
    fs.write(id, password + "\n", null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.green("Password saved to db."));
      });
    });
  });
};

module.exports = savePassword;
