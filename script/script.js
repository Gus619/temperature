var num1 = prompt("Enter your number");
var num2 = prompt("Enter your number2:");
var operation = prompt(" Menu : 1. Sum - 2. Subs - 3. Div - 4. Mult");


    if (operation=="1"){
        var sum=Number(num1)+Number(num2);//sum operation
        document.write(num1 + " + " + num2 + "=" +sum ); //display the result
    }

    if (operation=="2"){

      console.log("Subtraction");
    }

    if (operation=="3"){

        var div=Number(num1)/Number(num2);//division operation
        document.write(num1 + " / " + num2 + "=" /div ); //display the result
        
    }

    if (operation=="4"){

        console.log("Multiplication");

    }

     



