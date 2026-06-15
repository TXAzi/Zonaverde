const form = document.getElementById("relatorioForm");
const progressBar = document.getElementById("progressBar");

const campos = document.querySelectorAll("input");

campos.forEach(campo => {

campo.addEventListener("input", atualizar);

});

function atualizar(){

let preenchidos = 0;

campos.forEach(c => {

if(
(c.type === "checkbox" && c.checked) ||
(c.type !== "checkbox" && c.value !== "")
){
preenchidos++;
}

});

const total = campos.length;
const percent = (preenchidos / total) * 100;

progressBar.style.width = percent + "%";
}

form.addEventListener("submit", function(e){

e.preventDefault();

const mensagem = `📋 *RELATÓRIO OFICIAL - ZONA VERDE CE*

📅 Mês: ${mes.value}
🏠 Célula: ${celula.value}
👤 Líder: ${lider.value}
📆 Data: ${data.value}

📊 *RELATÓRIO DE CÉLULA*

👥 Presença: ${presenca.value}
📌 FT: ${ft.value}
📌 NC: ${nc.value}
💰 Oferta: ${oferta.value}

🔥 *PROGRAMA FEVO*

👥 Presenças FEVO: ${presencaFevo.value}
✅ Visitou: ${visitou.checked ? "Sim" : "Não"}
✅ Evangelizou: ${evangelizou.checked ? "Sim" : "Não"}
✅ Follow Up: ${followup.checked ? "Sim" : "Não"}

✨ Almas Ganhas: ${almas.value}

_Igreja Embaixada de Cristo Moçambique_`;

const numero = "258843796913";

window.open(
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
"_blank"
);

});
