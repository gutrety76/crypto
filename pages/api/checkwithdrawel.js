
import axios from "axios"
export default async function handler(req, res) {
    try {

        const {query} = req


        const response = await axios.get(
            `http://127.0.0.1:8000/checkwithdrawel/${Number(req.body.id)}/${req.body.cryptotype}/${parseFloat(req.body.amount)}/`
        );



        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response.status).json({message: error.response.data});
    }
}