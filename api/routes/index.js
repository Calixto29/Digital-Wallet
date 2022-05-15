const bodyParser = require('body-parser');

const toWallets = require('./routesWallet')

module.exports = app => {
    app.use(bodyParser.json());
    app.use(toWallets);
    app.get('/', (req, res) => res.send('Olá!'))
}
