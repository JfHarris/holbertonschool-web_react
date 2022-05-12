interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string
) => `${firstName.charAt(0)}. ${lastName}`;

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

class StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string {
        return 'Currently working';
    };
    displayName(): string {
        return this.firstName;
    };
}
