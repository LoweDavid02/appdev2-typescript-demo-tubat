let hobbies = ["Gaming", "Coding"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["David", "David123", 123456]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "David",
    age: 25,
    hobbies: ["Gaming", "Coding"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "David Lowe"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Elmer'
    // isPartTimeInstructor: true
}