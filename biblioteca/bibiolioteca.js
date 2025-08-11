let biblioteca={
    nome:"Biblioteca ETEC Antonio Furlan",
    endereço:"Rua Joao Batista Soares, 440 ",
    livros: [
        {
            titulo:"Javascript: O Guia Definitivo",
            autor: "David Flanaga, Joao Eduardo da Nobrega, Luciana Nedel de Assis",
            ano: 2012,
            id: 1
        },
        {
            titulo:"Algoritioms. Logica de para Desenvolver de Programaçao",
            autor:"Jose Augusto Navarro Garcia Manzano, Jayr Figuiredo de Oliveira",
            ano: 2009,
            id:2
        },
        {
            titulo:"Capitaes de Areia",
            autor:"Jorge Amado",
            ano: 1937,
            id:3
        }
    ]
}

function mostrarLivros(){
    const div= document.getElementById("saida");
    div.innerHTML=`<h2> ${biblioteca.nome}</h2>
    <p> <strong>Endereço</strong> ${biblioteca.endereço}</p>
    <h3> Livros Disponiveis:</h3>`;

    biblioteca.livros.forEach(function(livro){
        div.innerHTML +=
        `<div class=livro>`+
            `<strong class="livro"> Titulo: </strong> `+ livro.titulo +` <br> `+
            `<strong> Autor: </strong> ` + livro.autor +` <br>`+
            `<strong> Ano de Publicação: </strong> ` + livro.ano +` <br>`+
        `</div>`+ `<br>`

        // if(livro.id==250){
        //     `.livro{
        //         text-align: center;
        //         padding-top: 30px;
        //     }`
        // }

    })
}
// console.log(biblioteca);