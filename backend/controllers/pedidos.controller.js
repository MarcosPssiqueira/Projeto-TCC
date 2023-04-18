const Pedido = require("../model/Pedido");

module.exports = {
  post: async(req, res)=>{
    
    const {nomeCliente, nomeProduto, formaPagamento, enderecoCliente, observacoes} = req.body;
    
    if(!nomeCliente || !nomeProduto || !formaPagamento || !enderecoCliente || !observacoes){
      return res.status(422).json({msg: "Preencha todos os campos."});
    }
    try {
      await Pedido.create({
        nomeCliente,
        nomeProduto,
        formaPagamento,
        enderecoCliente,
        observacoes
      })
      return res.status(200).json({msg: "Pedido feito com sucesso!"})
    } catch (error) {
      return console.log(error)
    }
  }
}