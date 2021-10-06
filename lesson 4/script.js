const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = () =>{
    const female = [];
    const male = [];
    const pairs = [];

    for(let i = 0; i < students.length; i++){
        if(students[i].endsWith('а')){
            female.push(students[i]);
        }else{
            male.push(students[i]);
        }
    }

    for(let i = 0; i < female.length; i++){
        pairs.push([female[i]].concat([male[i]]));
    }
    return pairs;
}
// console.log(getPairs());

const getThemes = (pairs, themes) =>{
    const themesForPairs = pairs.map((pair, i) => [pairs[i].join(' i '), themes[i]]);
    return themesForPairs;
}
// console.log(getThemes(getPairs(),themes));

const studentsMarks = (students, marks) => students.map((item, i) => [students[i],marks[i]]);
// console.log(studentsMarks(students,marks));

const getThemesAndMarks = (pairs, themes) => pairs.map((pair, i) => [pairs[i].join(' i '), themes[i] , Math.floor(Math.random()* 5 + 1)]);

// console.log(getThemesAndMarks(getPairs(),themes));

const pairs = getPairs();
const themesForPairs = getThemes(pairs,themes);
const getMarks = studentsMarks(students,marks);
const pairsThemesAndMarks = getThemesAndMarks(pairs,themes);

console.log(pairs);
console.log(themesForPairs);
console.log(getMarks);
console.log(pairsThemesAndMarks);









   