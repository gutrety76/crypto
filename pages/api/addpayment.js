
import axios from "axios"

export default async function handler(req, res) {
    try {

        const {query} = req


        const response = await axios.get(
            `http://127.0.0.1:8000/addpayment/${Number(query.id)}/${query.cryptotype}/${parseFloat(query.amount)}/`
        );



        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response.status).json({message: error.response.data});
    }
}