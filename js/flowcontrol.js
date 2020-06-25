var name = prompt("What is your name?")

if(name.length != 0){
    document.write("Hello " + name);
}else{
    document.write("Empty array <br>");
}

function getAverage(array){
    var sum = 0;
    if(array.length != 0){
        for(index = 0; index < array.length; index++){
            sum += array[index];
        }
        var average = parseFloat(sum / array.length);
        document.write(average);
    }else{
        document.write("empty array");
        document.write("<br>try again");
    }
    
}

var grades = [2, 5, 6, 8];
getAverage(grades);
