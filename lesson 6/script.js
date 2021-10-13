const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// 1
function getSubjects(students) {
  const subjectsList = [];

  for (let key in students.subjects) {
    const subject = key[0].slice(0, 1).toUpperCase() + key.slice(1).toLowerCase()
      .replace('_', ' ');

    subjectsList.push(subject)
  }
  return subjectsList
}
console.log(`Повертає список предметів для конкретного студента :
${getSubjects(students[0])}`);

// 2
function getAverageMark(students) {
  const averageMarks = [];

  for (let key in students.subjects) {
    const marks = students.subjects[key];
    const marksLength = marks.length;
    const average = marks.reduce((acc, mark) => acc + mark) / marksLength;
    averageMarks.push(average)
  }
  const subjectsLength = Object.keys(students.subjects).length;
  const result = averageMarks.reduce((acc, mark) => acc + mark) / subjectsLength;

  return result.toFixed(2);
}
console.log(`Повертає седерній бал: ${getAverageMark(students[2])}`);

// 3
const getStudentInfo = (students) => `Повертає інформацію по студенту:
course: ${students.course}
name: ${students.name}
average Mark: ${getAverageMark(students)}`;

console.log(getStudentInfo(students[0]));

// 4
const getStudentsNames = (students) => students.map(student => student.name)
.sort();

console.log(`Сортуєм за алфавітом:
${getStudentsNames(students)}`);

// 5
const getBestStudent = (students) => {
   
  const bestStudent = students.reduce((cb, student) => getAverageMark(cb) > getAverageMark(student) ? cb : student).name
 

  return bestStudent
}
console.log(`Best student : ${getBestStudent(students)}`);

// 6
function calculateWordLetters(word) {
  const result = new Object;
  const arrWord = word.split('');
  arrWord.forEach((letter)  => result[letter] = result[letter] + 1 || 1);
  return result;
}
console.log(calculateWordLetters('tisto'))

