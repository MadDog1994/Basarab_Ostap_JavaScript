// # 1 Отримує будь-яке число та виводить найбільшу цифру в цьому числі

const getMaxDigit = number =>{
    const toString = String(number);
    let emptyCell = 0;

    for(let i = 0; i <= toString.length; i++){
        if(+toString[i] > emptyCell){
            emptyCell = +toString[i]
        }
    }
    return (emptyCell)
};

// # 2 Визначає ступінь числа

const stageNumber = (number, stage) =>{
    let value = 1;
        for(let i = 0; i < stage; i++){
            value *= number
        }
    return value;
}

// # 3 Форматування ім'я 

const nameFormatting = name => name[0].toUpperCase() + name.slice(1).toLowerCase();

// # 4 Обрахунок податку

const calculateTax = (salary,tax) => salary - salary / 100 * tax

// # 5 Повертає випадкове ціле число в діапазоні від min до max

const randomNumeric = (min,max) => Math.floor(Math.random()*(max - min + 1) + min);

// # 6 Рахує скільки разів певна буква повторюється в слові

const countLetter = (letter, fruit) => {
  let count = 0;
    for(let i = 0; i <= fruit.length; i ++){
     if(fruit[i] === letter){
         count ++
      }
     }
   return (count);
}

// # 7 Конвертує долари в гривні та навпаки

const convertCurrency = sum =>{
    const dollarPrice = 28;
    const dollarPicture = '$';
    const uahPicture = 'uah';
    const sumCount = parseInt(sum);

    if(sum.includes(dollarPicture)){
       return sumCount * dollarPrice + ` грн.`;
    }else if(sum.toLowerCase().includes(uahPicture)){
        return (sumCount / dollarPrice).toFixed(2) + ` $`;
    }else{
        alert('convert only $ and UAH');
    }
    return sum;
}

// # 8 Генерація випадкового паролю 

const getRandomPassword = (password = 8) =>{
    let secretPassword = '';
    for(let i = 1; i <= password; i++){
        secretPassword += Math.floor(Math.random()*10);
    }
    return secretPassword
}

// # 9 Видаляє всі букви з слова

const deleteLetters = (letter,word) =>{
    let result = '';
    for(let i = 0; i < word.length; i++){
        if(letter !== word[i]){
            result += word[i]
        }
    }
    return result
}

// # 10 Визначає Полідром

const findPolydrome = (Polydrome) =>{
    const strPolydrome = Polydrome.replaceAll(' ','').toLowerCase();
    const reverse = Polydrome.split('').reverse().join('').replaceAll(' ','').toLowerCase();
    if(strPolydrome === reverse){
        return true
    }
    else{
        return false
    }
}

// # 11 Видаляє з речення букви, які зустрічаються більше 1 разу

const deleteDuplicateLetter = (text) =>{
    const processedText = text.replaceAll(' ','').toLowerCase();
    let result = '';
    for(let i = 0; i < processedText.length; i++){
        if(processedText.indexOf(processedText[i]) === processedText.lastIndexOf(processedText[i])){
        result += processedText[i]
    }
    
}
    return result
}



console.log(`Функція №1: ${getMaxDigit(159)}`)
console.log(`Функція №2: ${stageNumber(3,6)}`)
console.log(`Функція №3: ${nameFormatting('oStap')}`)
console.log(`Функція №4: ${calculateTax(1000,19.5)}`)
console.log(`Функція №5: ${randomNumeric(1,4)}`)
console.log(`Функція №6: ${countLetter('r','cursor')}`)
console.log(`Функція №7: ${convertCurrency('100uah')}`)
console.log(`Функція №8: ${getRandomPassword()}`)
console.log(`Функція №9: ${deleteLetters('a','blablabla')}`)
console.log(`Функція №10: ${findPolydrome('а роза упала на лапу Азора')}`)
console.log(`Функція №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`)
