//function expression

 const Hello = function(){// its anonymus no function name
    console.log('iam a function expression, but Hello')
 }

 //calling the expression

 Hello();

 // taking a function as a parameter

 function sayHi(func){
    func();
    
 }

 sayHi(Hello);