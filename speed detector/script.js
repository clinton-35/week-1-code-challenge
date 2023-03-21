// function for calculating points & evaluating  speed
const getResult = () =>{
    //    variable assignment
      let num = document.getElementById("mySpeed").value;
      if(document.getElementsByTagName("input").value==""){
        alert("Please Enter Some Value");
      }
      let speed = (num-70)/5;
    
        // if ..else statement to check the truth of a value and calculating points
        if (num <= 70){
            document.getElementById("points").innerHTML = ('ok');
        }else {
            if( speed <=12 ){
                document.getElementById("points").innerHTML = (`${speed} points`);
            }else{
                document.getElementById("points").innerHTML = (`Your points are ${speed},  License  suspended`);
            } 
        }
        // returning the value back to the HTMLdoc
        return document.getElementById("points")
    }