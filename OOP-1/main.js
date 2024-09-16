class A{
    constructor(fruit){
        this.fruit= fruit
    }
}

class B extends A{
    constructor(fruit , color){
        super(fruit)
        this.color = color
    }
}

class C extends B{
    constructor(fruit , color , price){
        super(fruit, color)
        this.price = price
    }

    getprice(){
        console.log(this.fruit , this.color , this.price);
    }
}

let obj = new C ("orange" , "red" , "20")
obj.getprice()