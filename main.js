//Core MODULES
// const {myArray,add} = require("./math.js")

// console.log(myData.add(2,3));

// console.log(myArray);

const os = require(`os`);
const fs = require(`fs`);

let userDetails = os.userInfo().username;

fs.appendFile("oh-hi.txt", `Hello ${userDetails}`, (err) => {
  if (err) {
    console.log(userDetails);
  } ////////////
});
