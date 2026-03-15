console.log("hello amitesh");
const accountId = 12345
let accountEmail = "xyz@gmail.com"
var passWord = "12345"
accountCity = "Jaipur"
// accountCity is also a var whthr its not declared

// accountId = 2 // not allowed as its constant

passWord = "123456"
accountEmail = "amit@gmail.com"
accountCity = "ayodhya"

/* prefer to not use var
becoz of issue in block and functional scope
*/

console.table([passWord, accountEmail, accountId, accountCity])