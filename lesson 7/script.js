const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};


function getMyTaxes(salary) {
    return this.tax * salary
};

function getMiddleTaxes(salary = this.middleSalary) {
    return (this.tax * salary).toFixed(2)
};

function getAllTaxes(salary = this.middleSalary, vacancies = this.vacancies) {
    return (this.tax * salary * vacancies).toFixed(2)
};



function getMySalary(country){
    const getRandomSalary = (max = 2000, min = 1500) => Math.floor(Math.random() * (max - min + 1) + min);
    const tax = +getMyTaxes.call(country, getRandomSalary()).toFixed(2);
    const profit = +(getRandomSalary() - tax).toFixed(2);
    
    return {
        salary: getRandomSalary(),
        taxes: tax,
        profit: profit
    };
};

setInterval(() => {
    console.log(getMySalary(ukraine));
}, 10000);

console.log(`Податок в Україні: ${getMyTaxes.call(ukraine, 1000)} з 1000`);
console.log(`Податок в Латвії: ${getMyTaxes.call(latvia, 1000)} з 1000`);
console.log(`Податок в Литві: ${getMyTaxes.call(litva, 1000)} з 1000`);

console.log(`Середній податок в Україні ІТ спеціаліста: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Середній податок в Латвії ІТ спеціаліста: ${getMiddleTaxes.call(latvia)}`);
console.log(`Середній податок в Литві ІТ спеціаліста: ${getMiddleTaxes.call(litva)}`);

console.log(`Скільки всього податку платять в Україні: ${getAllTaxes.call(ukraine)}`);
console.log(`Скільки всього податку платять в Латвії: ${getAllTaxes.call(latvia)}`);
console.log(`Скільки всього податку платять в Литві: ${getAllTaxes.call(litva)}`);
console.log(getMySalary(ukraine));


