//lesson 40
interface IPerson {
    readonly firstName: string;
    lastName?: string;
    address: string
}

type Person41 = {
    firstName: string;
    lastName: string
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let person40 = {
    firstName: 'Eric',
    lastName: 'Hoi Dan IT',
    address: 'Ha noi'
};

console.log(getFullName(person40)); // Eric Hoi Dan IT
