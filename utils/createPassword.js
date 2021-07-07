const createPassword = (length) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=+[]{}|<>,.?/";
  let chars = characters;
  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  let pw = "";
  for (let i = 0; i < length; i++) {
    // let char = Math.floor(Math.random() * chars.length + 1);
    // pw += chars.charAt(char);

    pw += chars.charAt(Math.floor(Math.random() * chars.length + 1));
  }
  console.log(pw);
  return pw;
};

// createPassword(50);

module.exports = createPassword;
