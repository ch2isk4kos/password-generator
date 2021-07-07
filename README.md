# NodeJS CLI Application: Password Generator

## Without Commander

```js
/* WITHOUT COMMANDER */

console.log(process.argv);
// [
//   '/user/repos/directories/node/version/bin/node',
//   '/user/repos/project/node-password-generator/index'
// ]

// C:/from/root/of/project> node index generate

// [
//   '/user/repos/directories/node/version/bin/node',
//   '/user/repos/project/node-password-generator/index',
//   'generate'
// ]

if (process.argv[2] === "generate") console.log("Generated!");
```

## Commander

## Chalk
