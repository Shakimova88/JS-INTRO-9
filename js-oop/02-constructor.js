// Teacher constructor with fname, lname, age, field properties
function Teacher(fname, lname, age, field) {

    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.major = field;
}

// Create 2 Teacher Prototype methods as teach and giveHomework with empty bodies
Teacher.prototype.teach = function () {
    console.log(`${this.fname} teaches ${this.major}.`);
}

Teacher.prototype.giveHomework = function () {
    console.log(`${this.fname} ${this.lname} gives homework.`);
}


// Create 3 Teacher Objects
const teacher1 = new Teacher('John', 'Doe', 25, 'Math');
const teacher2 = new Teacher('Jane', 'Doe', 23, 'Botanical Sciences');
const teacher3 = new Teacher('Alex', 'Smith', 30, 'Chemical Engineer');
console.log(teacher1)
console.log(teacher2)
console.log(teacher3)

teacher1.teach();
teacher2.giveHomework();

// Store all the ages in an array -> [25, 23, 30]
const teachers = [teacher1, teacher2, teacher3];
const ages = teachers.map(y => y.age );
console.log(ages);
// Store all the first names in an array -> [ 'John', 'Jane', 'Alex' ]
const fnames = teachers.map(x => x.fname);
console.log(fnames);
// Find and print the information of the oldest teacher -> Alex is oldest with the age 30.
const theOldestTeacher = teachers.reduce((acc, curr) => {
    return acc.age > curr.age ? acc : curr; 
});
console.log(`${theOldestTeacher.fname} is the oldest with the age ${theOldestTeacher.age}.`);