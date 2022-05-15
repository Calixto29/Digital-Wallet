const database = require('../models');

class WalletController {
    static async toTakeAllWallet(req, res ) {
        try {
            const allWallet = await database.Wallet.findAll();
        return res.status(201).json(allWallet)
        } catch (error) {
            return res.status(500).json(error.message)
        }        
    }
}

module.exports = WalletController

