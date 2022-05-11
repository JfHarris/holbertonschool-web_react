interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Han',
    lastName: 'Solo',
    age: 76,
    location: 'Space'
};

const student2: Student = {
    firstName: 'Jon',
    lastName: 'Snow',
    age: 30,
    location: 'Westeros'
};

const studentsList = [student1, student2];

const table = document.createElement('table');
