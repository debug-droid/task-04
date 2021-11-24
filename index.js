const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const produtos = [
    {
        id: '1',
        title: 'Mouse',
        price: 90.99
    },
    {
        id: '2',
        title: 'Teclado',
        price: 110.99
    },
    {
        id: '3',
        title: 'Caixa de som',
        price: 75.50
    }
]

app.get('/', (req, res) => {
    res.render('home', {produtos});
})

app.get('/product/:id', (req, res) => {
    const produto = produtos[parseInt(req.params.id) - 1]

    res.render('product', {produto});
})

app.listen(3000)