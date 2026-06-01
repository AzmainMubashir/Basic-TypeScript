// constraint : strict rules deya

type Student = { id: number; name: string; dateOfBirth: string; class: number };

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "ABC",
  hasLaptop: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 444,
  name: "Abdur Rakib",
  hasWatch: true,
  dateOfBirth: "20-20-2010",
  class: 10,
};

const result = addStudentToCourse(student3);
console.log(result);