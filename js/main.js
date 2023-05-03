


const membri = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", foto:"wayne-barnett-founder-ceo.jpg"  },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto:"angela-caroll-chief-editor.jpg"  },
    { nome: "Walter Gordon", ruolo:"Office Manager", foto:"walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo:"Social Media Manager", foto:"angela-lopez-social-media-manager.jpg"},
    { nome: "Scott Estrada", ruolo: "Developer", foto:"scott-estrada-developer.jpg"},
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto:"barbara-ramos-graphic-designer.jpg"},
];

for( let key in membri) {
    console.log(membri[key]);
}

for (i = 0; i < membri.length; i++) {

    const membroSingolo = membri[i];
    const stringaJs = document.getElementById("contenitore");
    const stringaHtml = `Membro: <strong>${membroSingolo.nome}</strong><br> Lavoro: <strong>${membroSingolo.ruolo}</strong><br>`;
    stringaJs.innerHTML += stringaHtml;
    const imgFinals = "./img";
    let blocco  = `<div class="box">`;
    blocco += `<img src="${imgFinals}/${membroSingolo.foto}" alt="${membroSingolo.nome}" />`;
    blocco += `</div>`;

    stringaJs.innerHTML += blocco;



}

console.log("I membri sono stati stampati sulla pagina");



 


 



