const nomeCliente = document.getElementById("nomeCliente");
const nomeProduto = document.getElementById("nomeProduto");
const sabor1 = document.getElementById("sabor1")
const sabor2 = document.getElementById("sabor2")
const sabor3 = document.getElementById("sabor3")
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
    sabor: "",
    formaPagamento: "",
    enderecoCliente: enderecoCliente.value,
    observacoes: observacoes.value
  }

  if(!sabor1 || !sabor2 || !sabor3){
    data.sabor = null;
  }else if (sabor1.checked) {
    data.sabor = sabor1.value;
  } else if (sabor2.checked) {
    data.sabor = sabor2.value;
  } else if (sabor3.checked) {
    data.sabor = sabor3.value;
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
