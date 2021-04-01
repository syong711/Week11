let course1= {
    code: 'ACIT 1620',
    name: 'Fundamental Web Technologies'
};

let course2= {
    code: 'ACIT 1515',
    name: 'Scripting for IT'
};

let course3= {
    code: 'MATH 1310',
    name: 'Technical Math for IT'
};

let courseList= [course1, course2, course3];


let num;
do{
    num = prompt("Enter a four-digit code");
} while(isNaN (num) === true || (num.length !== 4));




for (let validcourse of courseList)
{
    if (validcourse.code.indexOf("1620") === 0) {
        console.log(`Yes I am taking the course: ${validcourse.code} - ${validcourse.name}`);
    }
    else if 

}







// courseList(code).push ("1630");
// console.log("Database course added")

