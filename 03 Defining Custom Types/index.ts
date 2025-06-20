type Food = string
// the type keyword allows you to create custom types. 

let favoriteFood: Food = "pizza"

type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

let person1 = {
    name: "Jill",
    age: 66, 
    isStudent: false
}

let person2: Person = {
    name:"John",
    age: 33,
    isStudent: true
}