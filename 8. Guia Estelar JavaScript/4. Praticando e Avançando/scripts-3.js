// 1. Declare uma variável de nome weight
//let weight

// 2. Que tipo de dado é a variável acima?
//console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
    
*/
//let name = "Heitor"
//let age = 20
//let stars = 5.0
//let isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dado?
        Object
    4.1 Atribua a ela as mesmas propriedades e valores
    do exercício 3.

    4.2 Mostre no console a seguite mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: "Heitor",
    age: 20,
    weight: 54.5,
    isSubscribed: true,
}

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
let students = [];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeo, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

/* 
    7. Coloque no console o valor da posição zero do Array acima
*/
// console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const larissa = {
    name: "Larissa",
    age: 22,
    weight: 75,
    isSubscribed: true,
}

students[1] = larissa
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/