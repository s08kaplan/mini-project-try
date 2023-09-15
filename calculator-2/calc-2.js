let operation = document.getElementById("inputext");

let calculate =(number)=>{
    operation.value+=number
}

let final=()=> {
    try {
        operation.value = eval(operation.value)
}   catch(err) {
    alert('Enter the valid input');
}
}