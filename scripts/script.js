let courseList=
{
    code: ['ACIT 1620', 'ACIT 1515', 'MATH 1310'],
    name: ['Fundamental Web Technologies', 'Scripting for IT', 'Technical Math for IT']
}


let user;
do{
    user = prompt("Enter a four-digit code");
} while(isNaN (user) === true || (user.length !== 4));


