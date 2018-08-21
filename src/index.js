import 'babel-polyfill';
import express from 'express';
import Renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();
    res.send(Renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})