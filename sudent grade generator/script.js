// function to calculate the results
function show_result() {
    // assigning values fromthe user input in html
    let num = document.querySelector("#html").value;
    let num2 = document.querySelector("#js").value;
    let num3 = document.querySelector("#css").value;
    // calculating total and percentege
    let total = parseFloat(num) + parseFloat(num2) + parseFloat(num3);
    let percentage = (total * 100) / 300;
    // grading of the percentageusing if....else statement
    if (percentage < 40) {
      document.querySelector(".gra").innerHTML = "E";
    } else if (percentage >= 40 && percentage <= 49) {
      document.querySelector(".gra").innerHTML = "D";
    } else if (percentage >= 50 && percentage <= 59) {
      document.querySelector(".gra").innerHTML = "C";
    } else if (percentage >= 60 && percentage <= 79) {
      document.querySelector(".gra").innerHTML = "B";
    } else if (percentage >= 80 && percentage <= 100) {
      document.querySelector(".gra").innerHTML = "A";
    } else {
      document.querySelector(".gra").innerHTML = "Invalid";
    }
    // assigning the  percentage annd total results to the html file
    document.querySelector(".to").innerHTML = total;
    document.querySelector(".per").innerHTML = percentage.toFixed(2);
    
    
}