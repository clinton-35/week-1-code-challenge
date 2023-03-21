// function to calculate the results
function show_result() {
    // assigning values fromthe user input in html
    let num = document.querySelector("#html").value;
    let num2 = document.querySelector("#js").value;
    let num3 = document.querySelector("#css").value;
    // calculating total and percentege
    let to = parseFloat(num) + parseFloat(num2) + parseFloat(num3);
    let per = (to * 100) / 300;
    // grading of the percentageusing if....else statement
    if (per < 40) {
      document.querySelector(".gra").innerHTML = "E";
    } else if (per >= 40 && per <= 49) {
      document.querySelector(".gra").innerHTML = "D";
    } else if (per >= 50 && per <= 59) {
      document.querySelector(".gra").innerHTML = "C";
    } else if (per >= 60 && per <= 79) {
      document.querySelector(".gra").innerHTML = "B";
    } else if (per >= 80 && per <= 100) {
      document.querySelector(".gra").innerHTML = "A";
    } else {
      document.querySelector(".gra").innerHTML = "Invalid";
    }
    // assigning the  percentage annd total results to the html file
    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per.toFixed(2);
    
    if (per < 40) {
      document.querySelector(".result h2").innerHTML = "You have failed!";
    } else {
      document.querySelector(".result h2").innerHTML = "You have passed!";
    }
  }