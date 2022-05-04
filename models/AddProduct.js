const Sequelize = require('sequelize');
const db = require('./db');

const AddProduct = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  preco: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  resumo: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Criar table no banco
//AddProduct.sync();

// Verificar se há alguma alteração na tabela e realiza a alteração
//AddProduct.sync({ alter: true });

module.exports = AddProduct;