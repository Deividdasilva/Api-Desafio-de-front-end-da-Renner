const express = require('express');
const cors = require('cors');
const app = express();

const AddProduct = require('./models/AddProduct');

app.use(express.json());

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});

app.get('/', async(req, res)=> {

  await AddProduct.findAll({
    attributes: ['nome', 'descricao', 'preco', 'quantidade', 'resumo']
  })
    .then((datahome) => {
      return res.json({
        erro: false,
        datahome 
      });
    }).catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Nemhum valor encontrado"
      });
    })
});

app.post("/addproduct", async(req, res)=> {

  await AddProduct.create(req.body)
  .then((msgContact) => {
    return res.json({
      erro: false,
      id: msgContact.id,
      mensagem: "Cadastrado com sucesso"
    });
  }).catch(() => {
    return res.status(400).json({
      erro: true,
      mensagem: "Erro"
    });
  })

});

app.listen(8080, () => {
  console.log("Servidor iniciado com sucesso na porta 8080: http://localhost:8080");
});