// function for grading the marks
const getResult = () =>{
//    variable assignment
  let num = document.getElementById("myMark").value;
//   statement to avoid user fromnot writing a value
  if(document.getElementsByTagName("input").value==""){
    alert("Please Enter Some Value")
  }

    // if ..else statement to grade the marks(num)
    if (num < 40){
        document.getElementById("grade").innerHTML = ('E');
    }else if(num >= 40 && num <= 49){
        document.getElementById("grade").innerHTML = ('D');
    }else if(num > 49 && num <= 59 ){
        document.getElementById("grade").innerHTML = ('C');
    }else if(num >= 60 && num <= 79){
        document.getElementById("grade").innerHTML = ('B');
    }else if(num > 79 && num <= 100){
        document.getElementById("grade").innerHTML = ('A');  
    }else{
        document.getElementById("grade").innerHTML = ('invalid ');
    }
    // statement for returning result of the if satement to the html
    return document.getElementById("result")
}