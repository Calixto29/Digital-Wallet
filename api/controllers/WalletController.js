const database = require('../models');

class WalletController {
    static async toTakeAllWallet(req, res) {
        try {
            const allWallet = await database.wallets.findAll();
        return res.status(201).json(allWallet)
        } catch (error) {
            return res.status(500).json(error.message);
        }        
    }

    static async getAWallet(req,res) {
        const { id, name, cpf,  } = req.params
        try {
            const oneWallet = await database.wallets.findOne( {where: {
                 id: Number(id)
                }
            });
            return res.status(200).json(oneWallet);
                 
        } catch (error) {
            return res.status(500).json(error.message);

        }
    } 

    static async nameAWallet(req,res) {
        const { name } = req.params
        try {
            const oneNameWallet = await database.wallets.findOne( {where: {
                 name: String(name)
                }
            });
            return res.status(200).json(oneNameWallet);
                 
        } catch (error) {
            return res.status(500).json(error.message);

        }
    } 
}

module.exports = WalletController

