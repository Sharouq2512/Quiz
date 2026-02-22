// // ----------------------------------------------------------------
// //-----------------------------------------------------------------

// var total = 0;
// var numberOfStudents = 5;

// for (var i = 1; i <= numberOfStudents; i++) {
//   var grade = Number(prompt("Enter marks of student " + i));

//   total = total + grade;

//   if (grade >= 50) {
//     console.log("Student Number " + i + " : Pass");
//   } else {
//     console.log("Student Number " + i + " : Fail");
//   }
// }

// var average = total / numberOfStudents;

// console.log("Total Marks = " + total);
// console.log("Average = " + average);

// var random =  Math.floor((Math.random() * 10));
// //-----------------------------------------------------------------
// //-----------------------------------------------------------------
// console.log(random);
// for (i=1;i<=5;i++) {
//     var number = +prompt("Enter Number");

//     if (number < random){
//         console.log("Too Cold");

//     }
//     if (number > random){
//         console.log("Too Hot");

//     }

//     if (number === random){
//         console.log("Well Done");
//         break;

//     }

// }

// //-----------------------------------------------------------------
// //-----------------------------------------------------------------
// var username = prompt("Enter username:")
// var password = prompt("Enter password:")
// counter = 0

// while (username != "sharouq" || password != "12345") {
//     counter++
//     alert("Erorr ! username or password wrong, try again");

//     if (counter < 3) {
//         username = prompt("Enter username:")
//         password = prompt("Enter password:")

//     }
//     else {
//         alert("You have tried many times , try after 3 seconds");
//         setTimeout(function(){

//     username = prompt("Enter username:")
//     password = prompt("Enter password:")}
//         , 3000);
//     break;

//     }

// }

// //-----------------------------------------------------------------
// //-----------------------------------------------------------------

// var arr1= [1,2,3,4,5,6,67,7,8,4,3,4,6,7,4,2,4,5]

// for (var i=0 ; i<arr1.length ; i++){
//     console.log(arr1[i]);

// }

// for (const x of arr1){
//     console.log(x);

// }

// ===============================================
// var username = prompt("Enter username:")
// var password = prompt("Enter password:")
// counter = 0
//  while (username != "sharouq" || password != "12345") {
//     counter++
//     alert("Erorr ! username or password wrong, try again");

//     if (counter < 3) {
//         username = prompt("Enter username:")
//         password = prompt("Enter password:")

//     }
//     else {
//         alert("You have tried many times , try again");

//         break;
//     }

// }
// =====================================================
// var username = prompt("Enter username:");
// var password = prompt("Enter password:");
// var counter = 0;

// while (username != "sharouq" || password != "12345") {
//     counter++;
//     alert("Error! username or password wrong, try again");

//     if (counter < 3) {
//         username = prompt("Enter username:");
//         password = prompt("Enter password:");
//     } else {
//         alert("You have tried many times");
//         break;
//     }
// }

// if (username == "sharouq" && password == "12345") {

//     alert("You have logged successfully!");

//     var No_Of_Qustions = +prompt("Enter number of Questions that you want");
//     var operators = ["+", "-", "*", "/"];
//     var score = 0;

//     for (var i = 1; i <= No_Of_Qustions; i++) {

//         var num1 = Math.floor(Math.random() * 10);
//         var num2 = Math.floor(Math.random() * 10);
//         var operation = operators[Math.floor(Math.random() * operators.length)];
//         var correctAnswer;

//         if (operation == "+") {
//             correctAnswer = num1 + num2;
//         }
//         else if (operation == "-") {
//             correctAnswer = num1 - num2;
//         }
//         else if (operation == "*") {
//             correctAnswer = num1 * num2;
//         }
//         else if (operation == "/") {
//             correctAnswer = num1 / num2;
//         }

//         var userAnswer= prompt(`${i} . ${num1} ${operation} ${num2} =`)

//         if (userAnswer == correctAnswer) {
//             alert("Good, correct answer");
//             score++;
//         }
//         else {
//             alert("Oops, Wrong answer");
//         }
//     }

//     alert(`Your score is ${score} /  ${No_Of_Qustions}`)
// }
// ...........................................................

// var cost =100
// var profit = 200
// var price = cost + profit
// var vat = 0.05* price
// var final_price = price +vat
// console.log(final_price);

// var cost2 =50
// var profit2 = 50
// var price2 = cost2 + profit2
// var vat2 = 0.05* price2
// var final_price2 = price2 +vat2

// console.log(final_price2);
// ....................................................
// function calcPrice(cost , profit){
//     var price = cost + profit
//     var vat = 0.05* price
//     var final_price = price +vat
//     return final_price

// }
// var final_price1 = calcPrice(100,50)
// var final_price2 = calcPrice(10,5)

// function calculator(num1 , num2 , operation){
//     var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operation = prompt("Enter operation:");
// var answer
//      if (operation == "+") {
//            var answer = num1 + num2;
//         }
//         else if (operation == "-") {
//            var answer = num1 - num2;
//         }
//         else if (operation == "*") {
//             var answer = num1 * num2;
//         }
//         else if (operation == "/") {
//             var answer = num1 / num2;
//         }
//         else {
//         return "Invalid operation";
//     }
// return answer
// }

// console.log(`The answer is ${calculator()}`);

// ......................................................

// function hi(n1,n2=13){
//     console.log("num1=", n1 ,"num2",n2);

// }

// hi()

// var hie=function(){
//     console.log("heeeeeeeeey");

// }

// var x={
//     name: "Sharouq",
//     id: 11,
//     frinds: ["fatma","reem"],
//     child:{
//         name:"Ahmed",
//         gender: "male",
//     },
//     eat:function(){
//         console.log("hello");

//     }
// }
// console.log(x.name)

// (function(){
//     console.log("hello");

// })()
// -----------------------------------------------------

// (function(){
//     x=20
//     console.log(x);

// })();

// (function(){
//     x=30
//     console.log(x);

// })()

// -----------------------------------------------------
// let a = +prompt("Enter number 1");
// let b = +prompt("Enter number 2");
// let c = +prompt("Enter number 3");

// let avr= (a,b,c) => ((a+b+c)/3);

// console.log("average is", avr(a,b,c));

// var a = prompt("Enter name");
// document.getElementById("main").innerText="Hello "+a

// let name = prompt("Enter first name");
// let fname = prompt("Enter last name");
// let age = +prompt("Enter age");
// document.getElementById("main").innerText="my name is "+name +", last name is"+ fname+" and my age is"+age ;

// let child= document.getElementById("child")

// age >= 18 ? child.classList.add("old") : child.classList.add("young");
// age >= 18 ? child.innerText ="I am older than 18" : child.innerText ="I am younger than 18"

// let btn = document.querySelector("#btn")

// btn.addEventListener("mouseenter",function() {
//     console.log("Mouse entered");
// })

// btn.addEventListener("mouseleave",function() {
//     console.log("Mouse left");
// })

// btn.addEventListener("click",function() {

//  btn.style.backgroundColor =="red"? btn.style.backgroundColor = "yellow" :btn.style.backgroundColor = "red";
// })

// document.addEventListener("click",function(e){
//     console.log(e.target);
// })

// let fname =document.querySelector("#fname")
// let lname =document.querySelector("#lname")

// let username = document.querySelector("#username")
// let pass = document.querySelector("#pass")
// let logbtn = document.querySelector("#logbtn")
// // console.log(fname);
// // console.log(lname);

// // fname.addEventListener("input", (e)=>{
// //     console.log(e.target.value);
// // })

// // lname.addEventListener("input", (e)=>{
// //     console.log(e.target.value);
// // })

// username.addEventListener("input", (e)=>{

// })

// pass.addEventListener("input", (e)=>{

// })
// logbtn.addEventListener("click", (e)=>{

//     console.log(username.value , pass.value);

// });
// ==========================================
// email.addEventListener("input", (e) => {

// })
// pass.addEventListener("input", (e) => {

// })

// logbtn.addEventListener("click", (e) => {

//     console.log(email.value, pass.value);

// })

// -------------------------------------------------------------
// let email = document.querySelector("#email")
// let pass = document.querySelector("#pass")
// let logbtn = document.querySelector("#logbtn")

// let quizBox = document.querySelector("#quizBox")
// let startBtn = document.querySelector("#startBtn")
// let Count = document.querySelector("#Count")
// let question = document.querySelector("#question")
// let answerInput = document.querySelector("#answerInput")
// let submitAnswer = document.querySelector("#submitAnswer")

// let operators = ["+", "-", "*", "/"]
// let totalQuestions = 0
// let currentQuestion = 1
// let score = 0
// let correctAnswer

// logbtn.addEventListener("click", () => {

//     if (email.value == "sh" && pass.value == "12") {
//         alert("You have logged successfully!")
//         quizBox.style.display = "block"

//     }
// else {

//     alert("Error! username or password wrong, try again");

// }
// })

// startBtn.addEventListener("click", () => {
//     totalQuestions = +Count.value
//     currentQuestion = 1
//     score = 0
//     generateQuestion()
// })

// function generateQuestion() {

//     let num1 = Math.floor(Math.random() * 10)
//     let num2 = Math.floor(Math.random() * 10)
//     let operation = operators[Math.floor(Math.random() * operators.length)]

//     if (operation == "+") {
//         correctAnswer = num1 + num2
//     }
//     else if (operation == "-") {
//         correctAnswer = num1 - num2
//     }
//     else if (operation == "*") {
//         correctAnswer = num1 * num2
//     }
//     else if (operation == "/") {
//         correctAnswer = num1 / num2
//     }

//     question.innerHTML = `${currentQuestion}. ${num1} ${operation} ${num2}`
// }

// submitAnswer.addEventListener("click", () => {

//     if (answerInput.value == correctAnswer) {
//         alert("Good, correct answer")
//         score++
//     } else {
//         alert("Wrong answer")
//     }

//     currentQuestion++

//     if (currentQuestion <= totalQuestions) {
//         generateQuestion()
//         answerInput.value = ""
//     } else {
//         alert(`Your score is ${score} / ${totalQuestions}`)
//     }
// })

// ----------------------------------------------------------------------

let userEmail = document.querySelector("#useremail");
let userPass = document.querySelector("#userpass");
let logbtn = document.querySelector("#logbtn");
let errMess = document.querySelector("#errMess");
let succMess = document.querySelector("#succMess");

let QuestionsNum = document.querySelector("#questionsNum");
let strTestBtn = document.querySelector("#strTestBtn");
let testScreen = document.querySelector("#testScreen");
let testSection = document.querySelector("#test");
let logoutBtn = document.querySelector("#logoutBtn");
let submitBtn = document.querySelector("#submitBtn");
let scoreResult = document.querySelector("#scoreResult");

let correctAnswers = [];

if (localStorage.getItem("Islogin") === "True") {
  GoToTestPage();
}

logbtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (userEmail.value !== "sh@" || userPass.value !== "12") {
    errMess.classList.remove("d-none");
    succMess.classList.add("d-none");
  } else {
    errMess.classList.add("d-none");
    succMess.classList.remove("d-none");

    localStorage.setItem("Islogin", "True");

    setTimeout(GoToTestPage, 1000);
  }
});

function GoToTestPage() {
  document.querySelector("#logform").classList.add("d-none");
  testSection.classList.remove("d-none");
}

strTestBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let num = Number(QuestionsNum.value);
  testScreen.innerHTML = "";
  correctAnswers = [];

  if (num <= 0 || isNaN(num)) return;

  for (let i = 1; i <= num; i++) {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let result = num1 + num2;

    correctAnswers.push(result);

    testScreen.innerHTML += `
    
        ${i}) ${num1} + ${num2} =
        <input type="number" class="form-control w-25 mb-3 answer-input">
    
    `;
  }

  submitBtn.classList.remove("d-none");

  scoreResult.textContent = "";
});

// ===============================
// Check Answers

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let inputs = document.querySelectorAll(".answer-input");
  let score = 0;

  inputs.forEach((input, index) => {
    if (Number(input.value) === correctAnswers[index]) {
      score++;
    }
  });

  scoreResult.textContent = `Your Score: ${score} / ${correctAnswers.length}`;
});

// ===============================
// Logout

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("Islogin");
  location.reload();
});
