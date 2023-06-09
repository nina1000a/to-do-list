import express, { json } from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/lists.route.js'
import cors from 'cors'
import mongoose from 'mongoose';

const app = express()


//Modifier pour vous connecter a votre db
mongoose.connect("mongodb+srv://nina:nina123@cluster0.jjomx6e.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error",
    console.error.bind(console, "connection error: "));
db.once("open", function () { console.log("Connected successfully"); });


app.use(bodyParser.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send('TP Web')
})
app.use(cors())
app.use('/lists', router)


app.listen(8081, () => {
    console.log("Serveur à l'écoute")
})