class Person{
    age = 0

    constructor(name){
        this.name = name
    }
}

function createPerson(name, age){
    let p  = new Person(name, age)
    p.age = age
    return p
}

let p1 = createPerson('Vinicius', 23)
console.log(`${p1.name} tem ${p1.age} anos`)