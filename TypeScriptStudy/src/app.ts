
// 타입스크립트 강좌 6
// Enum, NumericEnum
enum GenderType {
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'genderNeutral'
}

// 문자열 열거형
// String Enum

let studentID: number = 1234;
let studentName: string = 'Kim';
let age: number = 21;
let gender: string = 'female';
let subject: string = 'Javascript';
let couseCompleted: boolean = false;

let student1: Student = {
    studentID: 1234,
    studentName: 'Kim',
    age: 21,
    gender: 'female',
    subject: 'Javascript',
    couseCompleted: false
};

// 타입스크립트 강좌 5
// 인터페이스 대문자로 시작, 앞에 I를 붙이지 않음
// 인터페이스는 타입으로 사용
// 물음표는 있어도 되고 없어도 됨 옵션 프로퍼티
// readonly 객체 할당시 할당된 값을 못바꿈
// interface는 js 파일에 없다.

interface Student {
    readonly studentID: number,
    studentName: string,
    age?: number,
    gender: 'male' | 'female' | 'genderNeutral', // 리터럴 타입
    subject: string,
    couseCompleted: boolean,
    // addComment (comment: string): string;
    addComment?: (comment: string) => string
}

function getStudentDetails(studentID: number): Student {
    return {
        studentID,
        studentName,
        age,
        gender: 'male',
        subject,
        couseCompleted
    };
}

function saveStudentDetails (student: Student): void {
    
}

saveStudentDetails(student1);


// 타입스크립트 강의 7 construct getter setter

class Employee {
    constructor(
        private _fullName: string,
        private _age: number,
        private _jobTitle: string,
        private _hourlyRate: number,
        private workingHoursPerWeek: number) {

    }

    printEmployeeDetails = (): void => {
        console.log(`${this._fullName} 의 직업은 ${this._jobTitle} 이고
         일주일의 수입은 ${this._hourlyRate * this.workingHoursPerWeek} 달러
         이다.`);
    }

    get fullName () {
        return this._fullName;
    }

    set fullName (value: string) {
        this._fullName = value;
    }
}

// public, private, protected
let employee: Employee = new Employee('민수', 21, '주니어 웹개발자', 40, 35);
employee.fullName = '밥수';
console.log(employee.fullName);
employee.printEmployeeDetails();
let employee2: Employee = new Employee('한수', 21, 'PM', 40, 35);
employee2.printEmployeeDetails();

// 강의 7

// any type
let someValue: any = 5;
someValue = 'hello';
someValue = 123;

// type alias
type StrOrNum = number | string;

// union type
let price: string | number = 5;
price = 'free';

let price1: StrOrNum = 'hi';
price1 = 123;

// typeof 를 사용하여 type 가드 사용

// 강의 8 ts 함수
function sayHello(msg: string, name = 'world'): void {
    console.log(`${msg} ${name}`);
}

sayHello('Hello', 'Young');
sayHello('Hi');

const sendGreeting = (a='a', b='b') => console.log(`${a} ${b}`);
sendGreeting();
sendGreeting('123');
sendGreeting('123', '456');

// 강의 9 객체지향 프로그래밍
let strTest: string = 'name';