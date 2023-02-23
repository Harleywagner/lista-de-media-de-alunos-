const students = [
    {
      name: 'Wagner',
      firstTest: 8,
      secondTest: 7
    },
    {
      name: 'Andreza',
      firstTest: 5,
      secondTest: 6
    },
    {
      name: 'Sofia',
      firstTest: 10,
      secondTest: 9
    },
    {
      name: 'Stevan',
      firstTest: 7,
      secondTest: 3
    },
    {
        name: 'Derik',
        firstTest: 8,
        secondTest: 4
      },
    {
        name: 'Yohanna',
        firstTest: 5,
        secondTest: 6
    },
    {
        name: 'Harley',
        firstTest: 5,
        secondTest: 8
      }

    
  ]
  
  function averageTest(firstTest, secondTest) {
    return ((firstTest + secondTest) / 2).toFixed(2)
  }
  
  function printStudent(student) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${averageTest(student.firstTest, student.secondTest)}
   `
  }
  
  for (let student of students) {
    let Message = printStudent(student)
      alert(Message)
    }


function printStudent(student) {

const average = averageTest(student.firstTest, student.secondTest)
 
   if (average >= 7){
      return ` A média do(a) aluno(a)  ${student.name} é: ${averageTest(student.firstTest, student.secondTest)}, O(A) aluno(a) esta aprovado(a)!`
   } else {
     return ` A média do(a) aluno(a)  ${student.name} é: ${averageTest(student.firstTest, student.secondTest)}, O(A) aluno(a) esta reprovado(a)!`
   }
 }