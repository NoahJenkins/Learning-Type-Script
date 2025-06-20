console.log('Script started');

type Food = string
// the type keyword allows you to create custom types. 

let favoriteFood: Food = "pizza"

type Address = {
        street: string,
        city: string, 
        country: string
    }

type Person = {
    name: string,
    age: number,
    isStudent: boolean
    address?: Address // note that the address variable in the Person type is option, see how it is not in person 2, but is in person 3. 
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

let person3: Person = {
    name:"John",
    age: 33,
    isStudent: true,
    address: {
        street: "street",
        city: "city", 
        country: "USA! USA! USA!"
    }
}

function displayInfo(person: Person) {
    console.log(person3.name)
    console.log(`${person3.name} lives at ${person3.address!.street}`)
}

displayInfo(person3)