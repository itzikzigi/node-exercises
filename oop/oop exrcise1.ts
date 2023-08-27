class Shape {
  constructor() {}
  drew() {
    return "drawing a shape";
  }
  info(): string {
    return "this is a shape";
  }
}

let shape = new Shape();
// console.log(shape.drew());
// console.log(shape.info());

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
  info(): string {
    return "this is a rectangle";
  }
  scale(num: number): Rectangle {
    this.height *= num;
    this.width *= num;
    return this;
  }
  drew(): string {
    return `${super.drew()} of a rectangle`;
  }
  static newRectangle(rec1: Rectangle, rec2: Rectangle) {
    return rec1.area() + rec2.area();
  }
}

let myRectangle1 = new Rectangle(6, 2);
let myRectangle2 = new Rectangle(4, 7);
// console.log("rectangle area = " + myRectangle1.area());
// console.log("info = " + myRectangle1.info());
// console.log("scale = " + myRectangle1.scale(2).area());
// console.log("scale = " + Rectangle.newRectangle(myRectangle1, myRectangle2));
// console.log(myRectangle1.drew());

class ColoredRectangle extends Rectangle {
  color: string;
  constructor(color: string, width: number, height: number) {
    super(width, height);
    this.color = color;
  }
  info(): string {
    return `${super.info()} colored ${this.color}`;
  }
}

const myColor = new ColoredRectangle("red", 2, 4);
// console.log("color = " + myColor.info());

class Square extends Rectangle {
  side: number;

  constructor(side: number) {
    super(side, side);
    this.side = side;
  }
  drew(): string {
    return `${super.drew()} of a square`;
  }
}
const mySquare = new Square(3);
// console.log("square area = " + mySquare.area());
mySquare.info();
// console.log(mySquare.drew());

class Circle extends Shape {
  constructor() {
    super();
  }
  drew(): string {
    return "drawing a shape of a circle";
  }
}
const circle = new Circle();
// console.log(circle.drew());

const renderShapes = (arr: Shape[]) => {
  arr.forEach((shape) => {
    console.log(shape.drew());
  });
};

const arrOfShapes = [circle, myRectangle1, myRectangle2];
renderShapes(arrOfShapes);
