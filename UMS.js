var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollno) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.rollno = rollno;
        return _this;
    }
    Student.prototype.registerForCourse = function (cor) {
        this.courses.push(cor);
    };
    return Student;
}(Person));
var instructor = /** @class */ (function (_super) {
    __extends(instructor, _super);
    function instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = salary;
        return _this;
    }
    instructor.prototype.assignCOurses = function (cor) {
        this.courses.push(cor);
    };
    return instructor;
}(Person));
var course = /** @class */ (function () {
    function course(id, name) {
        this.students = [];
        this.instructors = [];
        this.name = name;
        this.id = id;
    }
    course.prototype.addstudent = function (std) {
        this.students.push(std);
    };
    course.prototype.addinstuctor = function (inst) {
        this.instructors.push(inst);
    };
    return course;
}());
var Department = /** @class */ (function () {
    function Department() {
        this.courses = [];
    }
    Department.prototype.addCourses = function (cor) {
        this.courses.push(cor);
    };
    return Department;
}());
var s1 = new Student("Hamza", 23, 1);
var s2 = new Student("javed", 25, 2);
var c1 = new course(1, "english");
var c2 = new course(2, "physics");
var i1 = new instructor("khurrum", 45, 35000);
s1.registerForCourse(c1);
c1.addinstuctor(i1);
c1.addstudent(s1);
c1.addstudent(s2);
i1.assignCOurses(c1);
console.log(s1);
console.log(c1);
console.log(i1);
