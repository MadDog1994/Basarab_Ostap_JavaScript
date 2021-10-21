
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.isExpelled = false;
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
    }
    get getMarks() {
        if (!this.isExpelled) {
            return this.marks
        }
        else {
            return null;
        }
    }
    set setMarks(mark) {
        if (!this.isExpelled) {
            this.marks.push(mark)
        }
    }
    getAverageMark() {
        if (!this.isExpelled) {
            const result = this.marks.reduce((acc, i) => acc + i) / this.marks.length;
            return +result.toFixed(2);
        }
        else {
            return null;
        }

    }
    dismiss() {
        if (!this.isExpelled) {
            this.isExpelled = true;
        }
    }
    return() {
        if (this.isExpelled) {
            this.isExpelled = false;
        }

    }

};

const ostap = new Student('НУ Львівська Політехніка м.Львів', '7', 'Басараб Остап')

// Виводим інфо по студенту
console.log(ostap.getInfo());

// Виводим оцінки
console.log(ostap.getMarks);

// добавляєм оцінки
ostap.setMarks = 5;

// показуєм оцінки і середній бал
console.log(ostap.getMarks);
console.log(ostap.getAverageMark());

// відчисляєм студента
ostap.dismiss();

// пробуєм добавити оцінку
ostap.setMarks = 5;

// пробуєм вивести оцінки та середній бал відчисленого студента
console.log(ostap.getMarks);
console.log(ostap.getAverageMark());

// повертаєм студента
ostap.return();

// виводим оцінки і середній бал
console.log(ostap.getMarks);
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
petro.setMarks = 5;

// дивимся оцінки і середній бал
console.log(petro.getMarks);
console.log(petro.getAverageMark());

// видаляєм студента
petro.dismiss();
// повертаєм студента
petro.return();
