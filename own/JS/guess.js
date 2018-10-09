
var hideNumber = prompt("Enter number is ...", 0);
for (i = 0; i < 101; i++){
    if (i === +hideNumber){
        alert("your number is ->" + i);
        break;
    }
}

