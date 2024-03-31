'use strict';

// class : template
// object : instance of a class
// js classes
// - introduced in es6
// - syntactical sugar over prototype-based inheritance
// 문법상으로 달달한 것들 + 프로토타입을 베이스로 함

// 클래스 선언하기
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name} : hello`);
    }
}

const sangjun = new PerformanceResourceTiming('sangjun', 25);
console.log(sangjun.name);
console.log(sangjun.age);
sangjun.speak

// getter와 setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }

        this._age = value < 0 ? 0 : value;
    }
}

// 사람의 나이가 -1이 되는가? ㄴㄴ 절대 안됨
// 그래서 getter setter로 보정을 시켜줌
const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// public and private
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment)

// static
class Article {
    static publisher = 'sangjun COding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('^');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());