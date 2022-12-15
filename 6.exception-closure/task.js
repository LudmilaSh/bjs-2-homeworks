function parseCount(value) {
    if (Number.isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
      }
      return parseFloat(value);
}

function validateCount(v) {
    try{
        return parseCount(v);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        let p = 0.5 * this.perimeter;
        let s = parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return s;
    }
}
function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}