let continuar = true

while (continuar) {
    
    let cavalariaCarro1 = parseInt(prompt("Digite a cavalaria do Carro 1:"))
    let cavalariaCarro2 = parseInt(prompt("Digite a cavalaria do Carro 2:"))
    
    if (cavalariaCarro1 > cavalariaCarro2) {
        alert("Carro 1 é o vencedor!")
    } else if (cavalariaCarro2 > cavalariaCarro1) {
        alert("Carro 2 é o vencedor!")
    } else {
        alert("É um empate!")
    }

    
    let opção
    do {
        opcao = prompt("Deseja fazer outra corrida? (s/n)").toLowerCase()
    } while (opcao !== 's' && opcao !== 'n')

    
    switch (opcao) {
        case 's':
            continuar = true
            break
        case 'n':
            continuar = false
            alert("Obrigado por participar da corrida!")
            break
        default
            continuar = false
            alert("Opção inválida! Encerrando.")
    }
}
