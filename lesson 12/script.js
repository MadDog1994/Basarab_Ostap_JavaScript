const inputLength = +prompt('Input length')
async function getRandomChinese(length){
    let count = 0;
    let sign = '';
    console.log("In progress...");
    while(count < length){
        sign += String.fromCharCode(Date.now().toString().slice(-5));
        await new Promise((resolve,reject) => {
            setTimeout(resolve,100)
        })
        count++
    }
    console.log(sign);
    console.log("Done");
}
getRandomChinese(inputLength)