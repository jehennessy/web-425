let firstName: string = 'Jordan';
let lastName: string = 'Hennessy';

function myName(firstName: string, lastName: string): string{
    return 'Hello my name is ' + firstName + ' ' + lastName;
};

console.log(myName(firstName, lastName));