const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


var guitars = [{id:0,name:"Gibson"},{id:1,name:"Fender"}]
//data parser - used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const swaggerDocs = require('./swagger.json');;
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/guitars', (req,res) => {
    res.send(JSON.stringify(guitars));
});


app.post('/guitar', (req,res) => {
    const name = req.body.name;
    guitars.push({name:req.body.id, name:req.body.name})
    res.send(`${JSON.stringify(guitars)} created`)
});

app.delete("/guitar/:id", (req,res)=>{
    console.log('delete:id:'+req.params.id)
    guitars = guitars.filter(item=> item.id != req.params.id)
    res.send("guitars left:"+JSON.stringify(guitars));
})

app.get('', (req,resp) => {
    resp.send('Hello World!');
});
app.listen(3000, () =>{
console.log('listening on port 3000');
});