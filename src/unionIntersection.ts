// Union

type UserRole = 'Admin' | 'User' | string;

const getDashboard = (role:UserRole) => {
    if (role==='Admin'){
        return 'Admin Dashboard';
    }
    else if (role==='User') {
        return 'User Dashboard';
    }
    else {
        return 'Guest Dashboard';
    }
}

console.log(getDashboard('xyz'))


type Manager = {
    designation: string,
    teamSize:number,
}

type Employee = {
    id: number,
    name: string,
    phone:number,
}

type Manployee = Manager & Employee;

const chowdory:Manployee = {
    id:12345,
    name: 'Chowdory',
    phone:16100,
    designation: 'Manager',
    teamSize:20,
}