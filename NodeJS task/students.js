const college = [
    {
        name: 'Harish',
        Department: 'CSE',
        RollNo: '42122010',
        favsub: {
            sub:'Computer science',
            sem:'3',
            Year:'II Year'
        }
    },
    {
        name: 'Aakash',
        Department: 'CSE',
        RollNo: '42122011',
        favsub: {
            sub:'Maths',
            sem:'3',
            Year:'II Year'
        }
    },
    {
        name: 'Swetha',
        Department: 'CSE',
        RollNo: '42122012',
        favsub: {
            sub:'Tamil',
            sem:'2',
            Year:'I Year'
        }
    },
    {
       name: 'Rubesh',
        Department: 'ECE',
        RollNo: '42123010',
        favsub: {
            sub:'Maths',
            sem:'3',
            Year:'II Year'
        }
    },
    {
        name: 'Pooja',
        Department: 'CIVIL',
        RollNo:'42124010',
        favsub: {
            sub:'Maths',
            sem:'3',
            Year:'I Year'
        }
    }
];

for (let i = 0; i < college.length; i++) {
    console.log("Student Name: " + college[i].name);
    console.log("faourite subject:" + college[i].favsub.sem);
    console.log();
}
