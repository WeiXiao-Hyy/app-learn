class myClass {
    constructor() {

    }

    myMethod() {
        return this.#myPrivateMethod();
    }

    #myPrivateMethod() {
        return "hello private";
    }
}

var my = new myClass();
console.log(my.myMethod());
