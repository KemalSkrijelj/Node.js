// exercises.ts

// 1. Basic Types
// Define variables for a user's name (string), age (number), and isAdmin (boolean).
// Write a function that takes a number and returns its square.

// const userName:string ="Kemal"
// const age:number = 18
// const isAdding:boolean = true

// console.log(`Username: ${userName}, typeOf ${typeof(userName)}`)
// console.log(`Age: ${age}, type: ${typeof(age)}`)
// console.log(`IsAdding: ${isAdding}, type: ${typeof(isAdding)}`)

// 2. Arrays and Tuples
// Create an array of favorite colors (string[]).
// Define a tuple to store the x and y coordinates of a point.
// Write a function to calculate the distance of a point from the origin.

const favColors:string[] = ["red","blue","green","orange"]
const tuple: [number,number]= [1,2]
function calculateDistanc(origin:[number,number]) {
  const distance = Math.sqrt((tuple[0]-origin[0])^2 + (tuple[1]- origin[1])^2)
  return distance
}
console.log(calculateDistanc([1,1]))
// 3. Enums
// Create an enum for the days of the week.
// Write a function that takes a day and returns whether it is a weekday or a weekend.


// 4. Functions
// Write a function `greet` that takes a name (required) and a greeting (optional, default to "Hello").
function greet(name:string, greeting:string):string {
  return `${greeting} ${name}`
}

console.log(greet("Kemal", "Hiii"))

// 5. Interfaces
// Create an interface `User` with fields: name, email, and age.
// Write a function that takes a User object and returns a formatted string like "Name (Age) - Email".
interface User{
  name:string,
  email: string,
  age:number
}

function getUser(user:User) {
  return `Name ${user.name}, email: ${user.email}, age ${user.age}`
}
const myUser:User = {name:"Kemal", email:"kemalskrijelj6@gmail.com", age:18}
console.log(getUser(myUser))

// 6. Type Aliases
// Define a type alias `Product` with fields: name, price, and an optional category.
// Write a function to filter an array of Product by a given category.
type category = "fast food" | "drinks" | "alcohol";

type Product = {
  name: string;
  price: number;
  category?: category;
};

const myProducts: Product[] = [
  {
    name: "pizza",
    price: 5,
    category: "drinks"
  },
  {
    name: "hotdog",
    price: 3,
    category: "alcohol"
  }
];

function filteredCategory(productArray: Product[], category: category): Product[] {
  const filteredProducts: Product[] = productArray.filter(product => product.category === category);
  return filteredProducts;
}

const fastFoodProducts = filteredCategory(myProducts, "fast food");
console.log(fastFoodProducts);

// 7. Union and Intersection Types
// Write a function that takes a parameter of type `string | number` and performs different operations based on its type.
// Create two interfaces `Admin` and `Customer`, then define a type `UserRole` as their intersection.
function handleParametar(param:string| number) {
  if (typeof param == "string") {
    return "Your parametar is string parametar"
  }
  else {
    return "Your parametar is number parametar"
  }
}
console.log(handleParametar("aasskk"))
console.log(handleParametar(11))
// 8. Generics (Bonus)
// 8. Generics (Bonus)
// Write a generic function `identity` that takes a value and returns it.
// Create a generic Stack class with methods push, pop, and peek.

// console.log("hello world");