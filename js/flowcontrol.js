var name = prompt("What is your name?")

if(name.length != 0){
    document.write("Hello " + name + "<br>");
}else{
    document.write("Empty array <br>");
}

function getAverage(array){
    var sum = 0;
    var counter = 0;
    if(array.length != 0){ //to check if there are any elements in the array
        for(index = 0; index < array.length; index++){
            if(array[index] == null){ //to skip when the element is null
                counter++;
                continue;
            }
            sum += array[index];
        }
        var lengthOfArray = array.length;
        var totalNumbers = lengthOfArray - counter;
        var average = parseFloat(sum / totalNumbers);
        document.write("Average = " + average + "<br>");
    }else{
        document.write("empty array");
        document.write("<br>try again");
    }
    
}

var grades = [2, 5, , , 9, 8, , 8];
getAverage(grades);
