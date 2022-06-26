import immutable from 'immutable';

const { Seq } = immutable;

const makeUppercase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function printBestStudents(grades) {
  const studentsList = Seq(grades)
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {student};
    });

  studentsList.forEach((student) => console.log(student));
}
