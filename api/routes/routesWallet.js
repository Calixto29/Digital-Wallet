const { Router } = require('express');
const WalletController = require('../controllers/WalletController');

const router = Router();

router.get('/wallets', WalletController.toTakeAllWallet);
router.get('/wallets/:id', WalletController.getAWallet);
router.get('/wallets/:name', WalletController.getAWallet);
router.get('/wallets/:cpf', WalletController.getAWallet);

module.exports = router;

