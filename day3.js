//switch case
let states= 2;

// switch (states)
// {
//    case 1:
//     {
//         console.log("super user");
//     }
//     case 2:
//     {
//         console.log("medium user");
//     }
//     case 3:
//     {
//         console.log("lower user");
//     }
// }                      //this will executes the conditioned statement and also after the statement which is present also

//to avoid this we use break command for each and every case as mentioned below
 
// switch (states)
// {
//    case 1:
//     {
//         console.log("super user");
//         break;
//     }
//     case 2:
//     {
//         console.log("medium user");
//         break;
//     }
//     case 3:
//     {
//         console.log("lower user");
//         break;
//     }
// }  

// teritoary operator basic syntak is "cond? correctvalue : false value"

// one format using normal if else conditions
//let votestauts = null;
// let age = 18
 
//  if (age>=18)
//  {
//     votestauts = true;
//  }
//  else (age<=16)
//  {
//     votestauts = null;

//  }

//  console.log (votestauts);

//by using above mentoned syntak=x in line 41
//  let age=16;
  
//  let votestauts= age>=18 ? yes : null;
//   console.log(votestauts);



/////LOOPS : if we use if cond it will executes the code when condition meets and it will move to other part of code
// but where as in the loops if the condition meets to be true it will executes the same part of code untill the conditon meets to false

// 3major key words for loop ar 
//1. while : (entry control loop) first executes the condition and goes to code
//2. do while :(exit control loop) first executes the code snd then checks conditon
// 3. for : we can write values, conditions in the same line

// * we need to add break command to stop this loop other wise it will run infinte times and our browser gets hanged.

// let a = 1;
// while (a<10)
// {
//     console.log("asslamualikum")
// }
// /let a=4;
// do 
// {
//     console.log("lets upgrade" + a);
//     break;
// }
// while(a<10);