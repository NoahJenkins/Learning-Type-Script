let ages: number[] = [100, 101, "one"] 
//placing an array after the type as seen here number[] informs type script the value of this variable is an array filled with numbers.
// You can see the "one" is cuasing an error. 

type user = {
    name: string,
    age: number,
    isStudent: boolean
    address?: Address // note that the address variable in the Person type is option, see how it is not in person 2, but is in person 3. 
}

type arrayOfUsers = user[];

let userBase: arrayOfUsers = [
    person1 = {
    name: "Jill",
    age: 66, 
    isStudent: false 
},
person2 = {
    name:"John",
    age: 33,
    isStudent: true
}
]
