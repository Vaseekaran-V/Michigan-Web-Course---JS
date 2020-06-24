function closeMe(){
    //find the element
    x = document.getElementById("demo");
    //option 1: change the style attribute directly
    //x.style.display = "none";

    //option 2: change the class
    x.className = "closed";
}

function openMe(){
    x = document.getElementById("demo");

    //x.style.display = "block";

    x.className = "open";
}