const express = require('express')
const app = express();
const fs = require('fs');
const bodyParser = require("body-parser")
const cors = require('cors');
port = 3080;

const usersFilePath = 'users.json';


app.use(cors());
app.use(bodyParser.json());

const users =loadUsers();

app.get('/api/users', (req,res)=>{
res.json(users)

});
app.post('/api/user', (req,resp)=>{
const user = req.body.user;
users.push(user); //Insert data into the array
saveUsers();
resp.json('user added succesfully');
});
app.get('/', (req,res)=>{
res.json("Server Online")
})
app.listen(port, ()=>{
console.log(`Server listening on port::${port}`)
});

function loadUsers() {

      const data = fs.readFileSync(usersFilePath);
      return JSON.parse(data) || [];
  }

function saveUsers() {
      const data = JSON.stringify(users);
      fs.writeFileSync(usersFilePath, data);
   
  }
  