//Imports
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

//Configurações do banco
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "guga1309@", 
  database: "cruddatabase",
});

app.use(cors());
app.use(express.json());


//Área de registro
app.post("/register",(req,res)=>{
  const {name} = req.body;
  const {email} = req.body;
  const {password} = req.body;
  
  let SQL = "INSERT INTO usuario(name, email, password) VALUES (?,?,?)";
  db.query(SQL,[name,email,password],(err,result)=>{
    console.log()
  })  
})

//Área para pegar as linhas do banco de dados
app.get("/getUsers",(req,res) =>{
  let {name} = req.body;
  let {email} = req.body;
  let SQL = "SELECT * FROM usuario";
  db.query(SQL,(err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result)
    }
  })
})

app.post("/login",(req,res)=>{
  let {email} = req.body;
  let SQL = "SELECT * FROM usuario WHERE email = ?";
  db.query(SQL,[email],(err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result)
    }
  })
})

//Escutador do servidor
app.listen(3307, () => {
  console.log("Servidor rodando na porta 3307");
});
