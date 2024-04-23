const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
//Problem 10: countCalculation [1]
// function countCalculation({departments:{math:{teachers:mathteachersCount,students:mathstudentsCount},history:{teachers:historyteachersCount,teachers:historystudentCount}}}) {
// return {
//   mathteachersCount,
//   mathstudentsCount,
//   historyteachersCount,
//   historystudentCount
// };
// }  
// console.log(countCalculation(school))
// Problem 11: findTopStudent [1]
// function findTopStudent(school,courseName){
//   let obj=''
//   let score=-1
//   school.students.map((ele)=>{
//     let  total=ele.scores.math+ele.scores.english+ele.scores.history+ele.scores.science
//     if(total>score){
//       score=total
//       obj=ele
//     }
//   })
//   return obj
// }
// let r=findTopStudent(school,'math')
// console.log(r)
// Problem 12: addNewDept [1]
//  function addNewDept(school,newDepartments){
//   return {
//     ...school,
//     departments:{
//       ... school.departments,
//      ...newDepartments

//     }
//   }
//  }
//  const newDepartments={
//   art:{teachers:5,students:6}
//  }
//  console.log("output:",addNewDept(school,newDepartments))
// Problem 13: highestStudentCountDepartment[1]
// function highestStudentCountDepartment(school){
//   let student=-1;
//   let sub=""
//   for(let i in school.departments){
//       totalstudent=school.departments[i].students
//     if(totalstudent>student){
//        student=totalstudent
//        sub=i
//     }
//   }
//     return sub
// }
// console.log(highestStudentCountDepartment(school))
// Problem 14: Greeting Message [1]
function generateGreeting(name,language='English'){
  let greeting={
    'English':`hello ${name}`,
    'Spanish':`¡Hola,${name}`,
    'Franch':`Bonjour ${name}`

  }
  return greeting[language]
}
console.log(generateGreeting('Abhishek','Franch'))