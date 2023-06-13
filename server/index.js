import express from 'express';
import cors from 'cors';
import Chance from 'chance';

const app = express();

app.use(cors());
app.use(express.json());

const chance = new Chance();

const animals = [... Array(250).keys()].map(id => {
    return{
        id,
        type : chance.animal(),
        age : chance.age(),
        name : chance.name()
    };
});

//console.log(animals);

app.get('', (req, res) => {
    // res.send(animals);
    const q = req.query.q?.toLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q));
    res.send(results);
})

app.listen(3000, () => console.log("the server is running"));