
import axios from "axios"
export default async function handler(req, res) {
    try {

        const response = await axios.get(
            `http://127.0.0.1:8000/getwallet/${req.body.id}`
        );



        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response.status).json({message: error.response.data});
    }
}