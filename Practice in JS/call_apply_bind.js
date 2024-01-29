// call method

// let name = {
//  firstName : "Ranu",
//  lastName : "rinki",

// }
//  let printFullName = function (hometown , state){
//     console.log(this.firstName + " " + this.lastName + " " + hometown + "  " + state);
//  }

// printFullName.call(name, "Damoh" , "M.P");

// let name2 = {
//     firstName : "Sachin",
//     lastName : "kohli",
// }
// //call
// printFullName.call(name2, "Bhopal" , "M.P");

// //apply
// printFullName.apply(name2, ["Bhopal", "M.P"]);

// //bind

// let name3 = {
//     firstName: "goli",
//     lastName: "khalo",
// }

// let MyName = printFullName.bind(name3, "Bhopal" , "M.P");

// // console.log(MyName);
// MyName();

// let user1 = {
//     name : "Shubham"
// }

// let user2 = {
//     name : "Shanu"
// }

// let user3  = {
//     name : "chinki"
//  } 

// function greatUser(greating){
//     console.log(greating  + "  " + this.name)
// }
// greatUser.call(user1 , 'hi')
// greatUser.apply(user2 , ['hello'])

// let newUser = greatUser.bind(user3 , 'hey')
// newUser()