class Student {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25);
        this.attendCount = 0;
    }

  getAge() {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    const average = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    return average;
  }

  present() {
    if (this.attendCount < this.attendance.length) {
      this.attendance[this.attendCount] = true;
      this.attendCount++;
    }
  }

  absent() {
    if (this.attendCount < this.attendance.length) {
      this.attendance[this.attendCount] = false;
      this.attendCount++;
    }
  }

  getAvarageAttendance() {
    const attendanceCheck = this.attendance.filter(a => a).length;
    return attendanceCheck / this.attendCount;
  } 


  summary() {
    const averageGrade = this.getAverageGrade();
    const avarageAttendance = this.getAvarageAttendance();

    if (averageGrade > 90 && avarageAttendance > 0.9) {
      return 'Well done!';
    } else if (averageGrade > 90 || avarageAttendance > 0.9) {
      return 'Good but it can be better!';
    } else {
      return 'Radish!';
    }
  }
}

const student1 = new Student('Steven', 'Carter', 1990);
student1.grades = [90, 65, 93, 77, 89];
student1.present();
student1.absent();
student1.absent();
student1.present();

console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.summary());

const student2 = new Student('Peter', 'Grill', 2001);
student2.grades = [100, 100, 97, 100, 100];
student2.present();
student2.present();
student2.present();
student2.present();

console.log(student2.getAge());
console.log(student2.getAverageGrade());
console.log(student2.summary());

