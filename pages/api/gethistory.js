
import axios from "axios"
export default async function handler(req, res) {
    try {

        const response = await axios.get(
            `http://127.0.0.1:8000/history/${req.body.id}`
        );

        const {history} = response.data;

        res.status(200).json({"history": {history}});
    } catch (error) {
        res.status(error.response.status).json({message: error.response.data});
    }
}