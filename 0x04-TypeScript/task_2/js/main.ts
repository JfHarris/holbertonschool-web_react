/** function isDirector (employee: Director | Teacher) */

function executeWork (employee: Director | Teacher) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks;
    }
    else {
        return employee.workTeacherTasks;
    }
}

type Subjects = 'Math' | 'History';
