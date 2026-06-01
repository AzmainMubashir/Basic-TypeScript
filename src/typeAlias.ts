// Type Alias

type User = {
    name: {
        firstName:string,
        lastName:string,
    },
    age: number,
    gender: 'male'|'female',
    phone:number,
}

const user1: User = {
    name: {
        firstName: 'Azmain',
        lastName:'Mubashir',
    },
    age:22,
    gender:'male',
    phone:16128,
}

const user2: User = {
    name: {
        firstName: 'Umme',
        lastName:'Habiba',
    },
    age:22,
    gender:'female',
    phone:16208,
}

// Function Alias

type Add = (num1:number,num2: number,)=>number;

const add:Add = (num1,num2) => num1+num2;