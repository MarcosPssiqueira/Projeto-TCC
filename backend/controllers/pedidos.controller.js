module.exports = {
  post: async(req, res)=>{
    
    const {nomeCliente, endereco, observacao, ingrediente, sabor, acompanhamento, calda} = req.body;
    
    if(!nomeCliente || !endereco || !ingrediente || !sabor || !acompanhamento|| !calda){
      return res.status(422).json({msg: "Preencha todos os campos."});
    }
    try {
      Pedido.create({
        nomeCliente,
        endereco,
        observacao,
        ingrediente,
        sabor,
        acompanhamento,
        calda
      })
      return res.status(200).json({msg: "Pedido feito com sucesso!"})
    } catch (error) {
      return json(error)
    }
  }
}