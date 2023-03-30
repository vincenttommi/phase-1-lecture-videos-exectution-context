class Cat {

constructor(name, breed,age){

this.name = name      
this.breed = breed
this.age = age
this.favFood = []
}

 introduce(){


    return `my name is ${this.name}`



 }

 addFood = (food) => {

    this.favFood.push(food)



 }
}


let rose = new Cat('rose','domestic','longhair',9)
let tummy = new Cat('tummy', 'domestic', 'short hair', 5)