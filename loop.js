// for loop


// for(var i=1;i<=10;i++){
//     console.log("5 *",i,"=",5*i);
// }

// for(let i=20;i>=10;i--){
//     console.log(i)
// }


// for user input 
// firstly we have to use const prompt=require("prompt -sync")({sigint: true})

// const prompt = require ("prompt-sync")({sigint: true})

// var a=parseInt(prompt("Enter the number: "))

// let x="5"
// let y=5
// console.log(x == y)
// console.log(x === y)



// for(let i=0;i<=10;i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }
// let sum = 0;
// for(let i=0;i<=10;i++)
//     {
//         if(i % 2 == 0){
//             sum=sum+i;
//         }
// }
// console.log("The sum of the even number from 0 to 10 is",sum);

//string

// let name = "sachin"
// for (let i of name){
//     if(i=="n")
//     console.log(i)
// }
//break if the condition is true then it will stop the code to check the loop

// let name = "string"
// count = 0
// for(let i of name){
//      count++
// }
// console.log(count)

// new_college = ""
// let college = "lumbini"
// for(let i of college){
//     if(i == "l"){
//         new_college = new_college + "L"
//     }
//     else {
//         new_college += i
//     }
// }
// console.log(new_college)



// var lines = "js is very easy"
// var new_line = " "
// for(let i of lines){
//     if(i != " "){
//         new_line += i
//     }
// }
// console.log(new_line)



// day 21


// WAP to reverse a string
// let name ="Nepal"
// let rev_name = ""
// for (let i of name){
//     rev_name = i + rev_name
// }
// console.log(rev_name)



//WAP to count "a" form the stirng

// let str1 = "How programmer develop a program to program a program ,that further develop other program in the programming device like computer,mobile etc."
// count = 0
// for(let i of str1){
//      if(i == "m"){
//         count++
//      }
// }
// console.log(count)

// function in js

// Syntax 

// function function_name(parameter){
//     statement; 

// }
// fucntion exercise

// function sum(a,b){     //a and b is parameter
//     console.log(a+b)
// }
// sum(5,6)  // 5 and 6 is argument


// //WAP to greet user with his/her name pass name as parameter to the function

// function greet(name){
//     console.log("Hello Mr.", name , "Nameste")

// }
// greet("Sachin")



//WAF for a shop product (price ,quantity)

// function product(price,quantity){
//     console.log("The price is",price," and the quantity of the product is",quantity)
//     console.log("The total price is ",price*quantity)
// }
// product(1000,5)

// function rev_string(name){
//     rev_name=""
//     for (let i of name){
//     rev_name = i + rev_name
// }
//        console.log(rev_name)

// }
// rev_string("sachin")



//palendrom

// function rev_string(name){
//     rev_name=""
//     for (let i of name){
//     rev_name = i + rev_name
// }
//        if(name == rev_name){
//         console.log("It is palidrome")
//        }
//        else{
//         console.log("It is not palindrome")
//        }

// }
// rev_string("madam")

const prompt = require ("prompt-sync")({sigint: true})
function add(a,b){
    return(a+b)
}
function sub(a,b){
    return(a-b)
}
function mult(a,b){
    return(a*b)
}
function divide(a,b){
    return(a/b)
}

while(true){
    console.log("1.Add 2.Sub 3. Mult 4.Div")
    userInput = parseInt(prompt("Enter yout choice: "))
    if(userInput == 1){
        console.log(add(5,5))
    }
     if(userInput == 2){
        console.log(sub(8,4))
    }
     if(userInput == 3){
        console.log(mult(2,4))
    }
     if(userInput == 4){
        console.log(divide(9,3))
    }
    
}

// fucntion retrun


// function add(a,b){
//     return a + b
// }
// // console.log(add(5,4))
// x = add(9,7)
// console.log(x)
// terminate
// function add(a,b){
//     return b
//     return a
// }
// console.log(add(5,4))
