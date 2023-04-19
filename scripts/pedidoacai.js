const nomeCliente = document.getElementById("nomeCliente");
const nomeProduto = document.getElementById("nomeProduto");
const ingredientes = document.getElementById("ingredientes");
const pagRadio1 = document.getElementById("pagRadio1");
const pagRadio2 = document.getElementById("pagRadio2");
const pagRadio3 = document.getElementById("pagRadio3");
const enderecoCliente = document.getElementById("enderecoCliente");
const observacoes = document.getElementById("observacoes");
const form = document.getElementById("formAcai");

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const data = {
    nomeCliente: nomeCliente.value,
    nomeProduto: nomeProduto.value,
    ingredientes: ingredientes.value,
    formaPagamento: "",
    enderecoCliente: enderecoCliente.value,
    observacoes: observacoes.value
  }

  if (pagRadio1.checked) {
    data.formaPagamento = pagRadio1.value;
  } else if (pagRadio2.checked) {
    data.formaPagamento = pagRadio2.value;
  } else if (pagRadio3.checked) {
    data.formaPagamento = pagRadio3.value;
  }

  fetch("http://localhost:3000/pedido", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((res)=> {
    if(res.ok){
      alert("Pedido feito com sucesso!")
    }
  })
  .catch(error => console.log(error))
})
