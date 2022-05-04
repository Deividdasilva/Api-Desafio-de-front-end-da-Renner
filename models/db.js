const Sequelize = require('sequelize');

const sequelize = new Sequelize('products', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
  console.log("Conexão criada com sucesso");
}).catch(() => {
  console.log("Erro ao conectar base de dados");
});

module.exports = sequelize;