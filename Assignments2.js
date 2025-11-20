// 1) --> Var-let-const - Assignment 2
 const browserVersion ="chrome"
function getbrowserVersion(browserVersion) {
    
    if (true) {
        
        console.log("Accessing var/let inside the if block",browserVersion);
        
    }
   var browserVersion ="edge" 
  console.log("Accessing var/let inside the function block",browserVersion);
}
console.log("Accessing const outside the function block",browserVersion);
getbrowserVersion("Firefox")  

// 2) --> Conditional 

function launchBrowser(browserName){//function declaration and parameter passing

if (browserName=== "Chrome") {
    console.log("Supported browser is chrome");  
    } else {
    console.log("UnSupported browser");    
}     
} launchBrowser("firefox") 

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log(testType);
            break;
        case "sanity":
            console.log(testType);
            break;
        case "regression":
            console.log(testType);
            break;        
 default: console.log("No test type defined");
break;
    }
}runTests("API") 

//3) -->  odd or even

function isOddOrEven(number) {
    var number = 123
    if (number/2 === 0) {
        console.log(number, "Is even")
        
    } else {
        console.log(number, "Is Odd")
        
    }
    
} isOddOrEven () 

// 4) --> Number type 

function numType(number1) {
    var number1 = -0.5
    if (number1 > 0) {
        console.log(number1, "Is greater than 0")
        
    } else { if (number1 < 0 ) {
        console.log(number1, "Is lesser than 0")
        
    } else {
        console.log(number1, "Is equal to 0")
        
    }
        
    }
    
} numType()

