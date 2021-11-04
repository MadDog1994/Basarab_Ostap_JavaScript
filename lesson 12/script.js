async function getRandomChinese(length){
    let count = 0;
    let sign = '';
    while(count < length){
        sign += String.fromCharCode(Date.now().toString().slice(-5));
        await new Promise((resolve,reject) => {
            setTimeout(resolve,50)
        })
        count++
    }
    console.log(sign);
}

console.log(getRandomChinese(4));