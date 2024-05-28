$("#phone").mask("(99) 9999-99999");

var produtos = [
    { id: 1, name: "Bife com Batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Mini Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 }
];

function calc() {
    var output = document.getElementById("output");
    var quantities = document.getElementsByName("quantity");
    var client = document.getElementById("clienteNome").value;
    var total = 0;
    output.innerHTML = "";

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    output.innerHTML += `<b>Caro</b> ${client}</br></br></br>Seguem os dados do seu pedido.</br></br>O seu pedido é:</br></br>`;

    for (var input of quantities) {
        var id = input.id;
        if (input.value > 0) {
            output.innerHTML += `<li>Prato: ${produtos[id - 1].name} - Preço Unitário: ${formatter.format(produtos[id - 1].price)} - Quantidade: ${input.value} - Valor total: ${formatter.format(input.value * produtos[id - 1].price)}</br>`;
            total += produtos[id - 1].price * input.value;
        }
    }

    output.innerHTML += `</br></br><h4>Preço final: ${formatter.format(total)}`;
}