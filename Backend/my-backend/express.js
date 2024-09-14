const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
const cors=require('cors')

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Dushyanthi:212U1A0574@cluster0.igubn4o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri="mongodb+srv://Dushyanthi:212U1A0574@cluster0.bqi0d.mongodb.net/"
app.use(cors());
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
app.listen(3008, () => {


  app.get('/login/:Email/:password', (req, res) => {
    const data = req.params;
    const Login = async () => {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      const database = client.db("Myntra");
      const result = await database.collection("users").findOne(data);
      if (result) {
        const output = { status: 'success', data: result }
        res.send(output)
      }
      else {
        const output = { status: 'error', data: null }
        res.send(output)
      }
    }
    Login()
  })


  app.post('/signup/:first_name/:Email/:password', (req, res) => {
    const data=req.params;
    const Signup=async()=> {
      await client.connect();
      const database = client.db("Myntra");
      const result = await database.collection("users").insertOne(data);
      if(result){

       const output = { status: 'success', data: result }
        res.send(output)
      }
      else {
        const output = { status: 'failed', data: null }
        res.send(output)
      }
    }

    Signup()

  })

  

})
