// # 1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел

const getRandomArray = (length, min, max) => {
    let arr = [];
    if(min < max){
        for(let i = 0; i < length; i++){
            arr.push(Math.floor(Math.random()* (max - min + 1) + min))
        }
    }
    return arr;
}
console.log(getRandomArray(15,5,15));

// # 3 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getAverage = (...numbers) => {
        const evenNumbers = numbers.filter((number) => Number.isInteger(number));
        let evenNumbersLength = evenNumbers.length;
        const total = evenNumbers.reduce((item, i) => item += i);
        return total / evenNumbersLength;
    }
    console.log(getAverage(1, 2, 3, 1.5, 4, 1.5))


// # 5 Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2);
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8));

// # 6 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

const countPositiveNumbers = (...numbers) => {
    const positiveNumbers = numbers.filter(number => number > 0);
    let count = positiveNumbers.length;
    return count;
}
console.log(countPositiveNumbers(1,2,3,4,5,-1,-2,-3));

// # 7 Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві 
// та залишить тільки ті, які діляться на ціло на 5

const getDividedByFive = (...numbers) => numbers.filter((number) => !(number % 5));
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//  # 8 Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.

const replaceBadWords = (string) => {
	const censoredWords = ['shit', 'fuck', 'bastard'];
	let censoredString = string.toLowerCase();

	for (let i = 0; i < censoredWords.length; i++) {
        const length = censoredWords[i].length;
        const toHide = '*'.repeat(length);
		censoredString = censoredString.split(censoredWords[i]).join(toHide);
	}
	return censoredString;
}

console.log(replaceBadWords('Shit, what the fuck ? this guy is really bastard'));

// # 9 Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.Якщо букв менше трьох – не розбиває.Пробіли завжди видаляються.Рядок приводится до нижнього регістру.Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(string) {
    if (string.length < 3) {
        return string;
    }

    const toString = string.replace(/\s/g,'').trim().toLowerCase();
    let result = [];

    for (let i = 0; i < toString.length; i += 3) {
        let oneSyllable = toString.slice(i, i + 3);
        result.push(oneSyllable);
    }

    return result;
}

console.log(divideByThree("Розділи мене на три"));


