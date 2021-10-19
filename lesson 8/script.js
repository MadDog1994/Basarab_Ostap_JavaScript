
class Student {
    marks = [5, 4, 4, 5];
    deleted = null;
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
    }
    getMarks() {
        return this.marks
    }
    setMarks(mark) {
        if (this.marks !== null) {
            this.marks.push(mark)
        } else (
            this.marks = null
        )
    }
    getAverageMark() {
        if (this.marks !== null) {
            return this.marks.reduce((acc, i) => acc + i) / this.marks.length;
        }
        else {
            return null;
        }

    }
    dismiss() {
        this.deleted = this.marks;
        this.marks = null;
    }
    return() {
        this.marks = this.deleted;
    }

};

const ostap = new Student('НУ Львівська Політехніка м.Львів', '7', 'Басараб Остап')

// Виводим інфо по студенту
console.log(ostap.getInfo());

// Виводим оцінки
console.log(ostap.getMarks());

// добавляєм оцінки
ostap.setMarks(5)

// показуєм оцінки і середній бал
console.log(ostap.getMarks());
console.log(ostap.getAverageMark());

// відчисляєм студента
ostap.dismiss();
// пробуєм добавити оцінку
ostap.setMarks(5);
// пробуєм вивести оцінки та середній бал відчисленого студента
console.log(ostap.getMarks());
console.log(ostap.getAverageMark());
// повертаєм студента
ostap.return();
// виводим оцінки і середній бал
console.log(ostap.getMarks());
console.log(ostap.getAverageMark());


class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000);
    }
    getScholarship() {
        if (this.getAverageMark() >= 4) {
            console.log('Ви отримали 1400 грн. степендії');
        }
    }
}

// // Створюю дані нового студента: 
const petro = new BudgetStudent('НУ Львівська Політехника', '5', 'Винницький Петро');
console.log(`Дані нового студента: ${petro.getInfo()}`);

// добавляєм оцінки 
petro.setMarks(5);
// дивимся оцінки і середній бал
console.log(petro.getMarks());
console.log(petro.getAverageMark());
// видаляєм студента
petro.dismiss();
// повертаєм студента
petro.return();
console.log(Student);