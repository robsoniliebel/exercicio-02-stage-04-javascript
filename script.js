const students = [
    {
        name: "Amanda",
        noteOne: 7,
        noteTwo: 5,
    },

    {
        name: "Julio",
        noteOne: 4,
        noteTwo: 3,
    },

    {
        name: "Matheus",
        noteOne: 9.5,
        noteTwo: 10,
    },

    {
        name: "Maria Vitoria",
        noteOne: 10,
        noteTwo: 9,
    },

    {
        name: "Rosane",
        noteOne: 10,
        noteTwo: 9,
    },

    {
        name: "Adolfo",
        noteOne: 9,
        noteTwo: 10,
    }
]

let studentsApproveds = [];

for (let student of students) 
{
    let average = (student.noteOne + student.noteTwo) /2;

    if (average >= 7) {
        alert(`A média do(a) aluno(a) ${student.name} é de: ${average.toFixed(0)} 
Parabéns ${student.name} você foi aprovado(a) no Concurso!`)
    } 
    else {
        alert(`A média do(a) aluno(a) ${student.name} é de: ${average.toFixed(0)} 
Não foi dessa vez ${student.name}, Tente Novamente!`)
    }
}