// 30 minutes max
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (i=0;i<students.length;i++){
    console.log("Name : " + students[i].name+ "  Cohort : " + students[i].cohort)
};

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for (i=0;i<users.employees.length;i++){
     name_length=users.employees[i].first_name.length+users.employees[i].last_name.length
     console.log(i+1 + " - " + users.employees[i].last_name+ ", "+users.employees[i].first_name + " - "+ name_length)
 }

 for (i=0;i<users.managers.length;i++){
    name_length=users.managers[i].first_name.length+users.managers[i].last_name.length
    console.log(i+1 + " - " + users.managers[i].last_name+ ", "+users.managers[i].first_name + " - "+ name_length)
}