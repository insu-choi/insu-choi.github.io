"use strict";
// 타입스크립트 강좌 6
// Enum, NumericEnum
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
// 문자열 열거형
// String Enum
var studentID = 1234;
var studentName = 'Kim';
var age = 21;
var gender = 'female';
var subject = 'Javascript';
var couseCompleted = false;
var student1 = {
    studentID: 1234,
    studentName: 'Kim',
    age: 21,
    gender: 'female',
    subject: 'Javascript',
    couseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: studentID,
        studentName: studentName,
        age: age,
        gender: 'male',
        subject: subject,
        couseCompleted: couseCompleted
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
// 타입스크립트 강의 7 construct getter setter
var Employee = /** @class */ (function () {
    function Employee(_fullName, _age, _jobTitle, _hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetails = function () {
            console.log(_this._fullName + " \uC758 \uC9C1\uC5C5\uC740 " + _this._jobTitle + " \uC774\uACE0\n         \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this._hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC\n         \uC774\uB2E4.");
        };
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// public, private, protected
var employee = new Employee('민수', 21, '주니어 웹개발자', 40, 35);
employee.fullName = '밥수';
console.log(employee.fullName);
employee.printEmployeeDetails();
var employee2 = new Employee('한수', 21, 'PM', 40, 35);
employee2.printEmployeeDetails();
// 강의 7
// any type
var someValue = 5;
someValue = 'hello';
someValue = 123;
// union type
var price = 5;
price = 'free';
var price1 = 'hi';
price1 = 123;
// typeof 를 사용하여 type 가드 사용
// 강의 8 ts 함수
function sayHello(msg, name) {
    if (name === void 0) { name = 'world'; }
    console.log(msg + " " + name);
}
sayHello('Hello', 'Young');
sayHello('Hi');
var sendGreeting = function (a, b) {
    if (a === void 0) { a = 'a'; }
    if (b === void 0) { b = 'b'; }
    return console.log(a + " " + b);
};
sendGreeting();
sendGreeting('123');
sendGreeting('123', '456');
// 강의 9 객체지향 프로그래밍
var strTest = 'name';
