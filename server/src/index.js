import express from "express";
import cors from 'cors';

const app = express();
app.use(cors(), express.json());

app.get('/', (req, res) => {
    console.log("Hello!!");
    res.send('Hello');
    res.status(200);
});

app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
    res.status(200);
});

app.listen(4000)