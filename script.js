let car1 = {
    nome: " Supra MK4",
    marca: "Toyota",
    ano: "1993",
    cavalos: "500"
}

const jogar = confirm('Escolha o seu carro e veja sua sorte!')
function mostrarCarro1() {
    return `Parabéns ese é o seu carro:
    Nome: ${car1.nome}
    Marca: ${car1.marca}
    Ano: ${car1.ano}
    Cavalos: ${car1.cavalos}`

}
let car2 = {
    nome: "Skyline GTR R34",
    marca: "nissan",
    ano: "1998",
    cavalos: "455"

}

function mostrarCarro2() {
    return `Parabéns ese é o seu carro:
        Nome: ${car2.nome}
        Marca: ${car2.marca}
        Ano: ${car2.ano}
        Cavalos: ${car2.cavalos}`
    
}
let car3 = {
    nome: "Dodge Charger",
    marca: "Dodge",
    ano: "1970",
    cavalos: "520"
}
function mostrarCarro3() {
    return `Parabéns ese é o seu carro:
        Nome: ${car3.nome}
        Marca: ${car3.marca}
        Ano: ${car3.ano}
        Cavalos: ${car3.cavalos}`
}
let car4 = {
    nome: "Eclipse",
    marca: "Mitsubishi",
    ano: "1995",
    cavalos: "430"
}
function mostrarCarro4() {
    return `Parabéns ese é o seu carro:
        Nome: ${car4.nome}
        Marca: ${car4.marca}
        Ano: ${car4.ano}
        Cavalos: ${car4.cavalos}`
}
let car5 = {
    nome: "Multipla",
    marca: "fiat",
    ano: "1998",
    cavalos: "75",
}
function mostrarCarro5() {
    return `Parabéns ese é o seu carro:
     Nome: ${car5.nome}
     Marca: ${car5.marca}
     Ano: ${car5.ano}
     Cavalos: ${car5.cavalos}`
}
let menu = ''
do {
    menu = parseInt(prompt(`Escolha uma opção:
        1 - carro
        2 - carro
        3 - carro
        4 - carro
        5 - carro
        6 - Sair`))
    switch (menu) {
        case 1:
            alert(mostrarCarro1())
            break;
        case 2:
            alert(mostrarCarro2())
            break;
        case 3:
            alert(mostrarCarro3())
            break;
        case 4:
            alert(mostrarCarro4())
            break;
        case 5:
            alert(mostrarCarro5())
            break;

        case 6:
            alert("Saindo...")
            break;
    }
} while (menu !== 6)
