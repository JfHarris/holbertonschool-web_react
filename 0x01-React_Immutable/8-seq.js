import immutable from 'immutable';

const { Seq } = immutable;

export default function printBestStudents(grades) {
  const studentsList = Seq(grades)
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return { student };
    });

  studentsList.forEach((student) => console.log(student));
}
