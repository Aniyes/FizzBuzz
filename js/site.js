


//get the values from the page
//starts or controller function
function getValues() {
        //get values from the page
        let Fizz = document.getElementById("Fizz").value;
        let Buzz = document.getElementById("Buzz").value;
        
        

        //we need to Validate our input
        //parse into Integers
        Fizz = parseInt(Fizz);
        Buzz = parseInt(Buzz);

        if (Number.isInteger(Fizz) && Number.isInteger(Buzz)) {

                 //we call generateNumbers
              let numbers = generateNumbers(Fizz, Buzz);
                //we call displayNumbers
                  displayNumbers(numbers);
        } else {
                alert("You must enter integers");
        }
    


    
       

    
}

//generate numbers from Fizz to the Buzz
//logic function(s)
function generateNumbers(Fizz, Buzz) {

        let numbers = [];

        //we want to get all numbers from the start to end
        for (let i = 0; i <= 100; i++) {

                //Check to see if divisible by Both (3 and 5)
                //check to see if divisible by fizz value (3)
                //check to see if divisible by buzz value (5)
                if (i % Fizz == 0 && i % Buzz == 0) {
                        numbers.push('FizzBuzz');        
                } else if (i % Fizz == 0) {
                        numbers.push('Fizz');
                } else if (i % Buzz == 0) {
                        numbers.push('Buzz');
                } else {
                        numbers.push(i);
                }
                
                
        }

        return numbers;
    
}


//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers) {
        //get the table body element from the page
        let tableBody = document.getElementById("results");
        //get the template row
        let templateRow = document.getElementById("fbTemplate");

        //clear table
        tableBody.innerHTML = "";
        
        for (let i = 0; i < numbers.length; i+=5) {
                let number = numbers[i];
                let tableRow = document.importNode(templateRow.content, true);
                //grab use the td's and put into array
                let rowCols = tableRow.querySelectorAll("td");
                rowCols[0].textContent = numbers[i];
                rowCols[1].textContent = numbers[i + 1];
                rowCols[2].textContent = numbers[i + 2];
                rowCols[3].textContent = numbers[i + 3];
                rowCols[4].textContent = numbers[i + 4];

                tableBody.appendChild(tableRow);                
        }
}