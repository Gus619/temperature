
//Temperature Converter

//1. Create a function called convertTemperature.
//2. For the temperature, use an if statement to check the scale parameter. If it is "C", convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32. If it is "F", convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
//3. Display the converted temperature on the HTML.


function TempConverter (){
   let temp = prompt("Input a temperature number");
   let measurement = prompt("Enter 'c' or 'f' for Celsius or Fahrenheit");

   if (measurement == "c"){
      let fahrenheit = (temp * (9/5) + 32)
      console.log(fahrenheit);
   } else {
      let celsius = (temp - 32 * (5/9));
      console.log(celsius);
   };
  
      //   if ( celsius.value != "" ) {
      //       conversionF = document.getElementById("celsius").value * 9 / 5 + 32;
      //       document.getElementById("fahrenheit").value = Math.round(conversionF);
      //    } 

      //    else if ( fahrenheit.value != "" ){
      //       conversionC = (document.getElementById("fahrenheit").value - 32) * 5 / 9;
      //       document.getElementById("celsius").value = Math.round(conversionC);
      //    }
}





