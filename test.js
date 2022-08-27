const fs = require("fs");
//读数据库
const usersString = fs.readFileSync("./db/users.json").toString();
console.log(typeof usersString);
const usersArray = JSON.parse(usersString); //字符串变为数组对象，或者其他
console.log(usersArray);
console.log(usersArray instanceof Array); //该对象的数据类型是否是数组
//写数据库
const user3 = { id: 3, name: "tina", password: "yyy" };
usersArray.push(user3); //数据还在本地
const string = JSON.stringify(usersArray); //把数组变为字符串
fs.writeFileSync("./db/users.json", string); //写进users.json传到数据库
