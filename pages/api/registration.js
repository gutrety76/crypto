
import axios from "axios"
export default async function handler(req, res) {
    try {


        const response = await axios.post(
            'http://127.0.0.1:8000/registration/',
            {username: req.body.username, password: req.body.password, email: req.body.email}
        );


        res.status(200).json({"username": {
            username: response.data.user.username,
            email: response.data.user.email,
            user_id: response.data.user.id
            },"wallet": {
                "wallet": response.data.user.wallet,
                "walletid": response.data.walletid
            }});
    } catch (error) {
        res.status(error.response.status).json({message: error.response.data});
    }
}