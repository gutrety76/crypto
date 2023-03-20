
import axios from "axios"
export default async function handler(req, res) {
    try {

        const response = await axios.put(
            `http://127.0.0.1:8000/wallet/${req.body.id}`,{
                add_currency: req.body.add_currency,
                add_currency_type: req.body.add_currency_type,
                minus_currency: req.body.minus_currency,
                minus_currency_type: req.body.minus_currency_type
            }
        );



        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response.status).json({message: error.response.data});
    }
}