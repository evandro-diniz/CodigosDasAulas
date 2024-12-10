// Importação de módulos
const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
//const mysql = require("mysql2");
const { title } = require("process");
//const fileupload = require("express-fileupload");

const app = express();
const port = 3000;

// Habilitando upload de arquivos
//app.use(fileupload());

// Adicionar Bootstrap
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));

// Configuração do Handlebars como motor de templates
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Manipulação de dados via rotas
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configuração de conexão com o banco
/*const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "projeto",
});*/

// Mensagem de conexão
/*conexao.connect(function (erro) {
  if (erro) throw erro;
  console.log("Conexão com o DB ok!");
});*/

// Rotas
app.get("/", (req, res) => {
  res.render("index", { title: "Home", cabecalho: "Página Inicial" });
});

app.get("/sobre", (req, res) => {
  res.render("sobre", { title: "Sobre", cabecalho: "Mais Informações" });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    title: "Cadastro",
    cabecalho: "Cadastrar Informações",
  });
});

/*app.post("/cadastrar", (req, res) => {
  console.log(req.body);
  console.log(req.files.imagem.name);
  req.files.imagem.mv(
    __dirname + "/public/images/uploads/" + req.files.imagem.name
  );
  res.end();
});*/

// Inicialização servidor
app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
