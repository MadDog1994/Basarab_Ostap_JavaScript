let numX = parseInt(prompt('Write a number X from 0 - 100'));
let numM = parseInt(prompt('Write a number M from 0 - 100'));

if(numX == '' || numM == '' || isNaN(numX) || isNaN(numM)|| numX == null || numM == null){
    alert('Try again')
    document.location.reload()
}else{
    let skipEven = confirm('Skip even?');

    let result = null;
    for(let i = numX; i <= numM; i++){
        if(skipEven && !(i % 2)){
            continue;  
        }
        result += i;
};
alert(result);
}




