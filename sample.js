
// let n = 34;
//  n++;

//  let fname = "subhan"
//  console.log("the name is" + fname);

//writning a big statment in one line without using concatination operator

        // let fname = "Subhan"
        // let mname = "Mohammed"
        // let last = "devops engineer"

        // let statement = `the name ${fname}
        // middle name is ${mname};
        // and working as ${last}`

        // console.log(statement);


// let num1 = 7;
// let num2 = 3;
// let num3 = 5;
// let num4 = "5";  //type corrision, in js we provide number as string it takes it as an value 

//console.log(num1+num2+num3);
// console.log(num1+num2+num3+num4); //it wil concanitate the value of number4 with addition of previous 3values and give 155 as o/p


//identity operators (===, !==)
// assignment oper (=)
// logical oper (&& || !)   we also have true & true = T; t or f = T; T & F = F


//uniary oper = (++, --)

    // let n = 6; 
    // n++;
    //  console.log(n);

    // let n= 7;
    // let a= ++n;
    //  console.log(a,n); // shows o/p as 8,8 bcz it first increases value of n and again shows n value

    // let n= 7;
    // let a= n++;
    //  console.log(a,n); // in this first shws n value and increases n value for a (7,8)

// conditonal statement = if, else, elseif

//    let connection = 3;
     
//     if (connection===3);
//      {
//         console.log("this is subhan");
//      }
     
//      console.log("outside code");  ///this shows nothing as o/p 

        // let connection = 3;
     
        // if (connection===3)
        // {
        //     console.log("this is subhan");
        // }
        // else
        // {
        //     console.log("nothing to print");
        // }                                      this is for only one condition


    //if we have multiple conditons, then we write by using if elseif and else

    // let percentage= 50;

    //  if (percentage>=80)
    //  {
    //     console.log("A++ Grade");
    //  }
    //  else if (percentage>=60)
    //  {
    //     console.log("A Grade");
    //  }
    //  else if (percentage>=50)
    //  {
    //     console.log("B Grade");
    //  }
    //  else
    //  {
    //     console.log("Fail");
    //  }                             this if we write the conditon of >=80 in second then it gets executed for first and willstop 
          // to over come this we usee double conditons as written below 

          let percentage= 40;

          if (percentage>=80 && percentage<=100)
          {
             console.log("A++ Grade");
          }
          else if (percentage>=60 && percentage<=80)
          {
             console.log("A Grade");
          }
          else if (percentage>=50 && percentage<=60)
          {
             console.log("B Grade");
          }
          else
          {
             console.log("Fail");
          }