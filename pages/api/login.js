
import axios from "axios"
export default async function handler(req, res) {
  try {


    const response = await axios.post(
        'http://127.0.0.1:8000/login/',
        {username: req.body.username, password: req.body.password}
    );

    const {token,username,wallet} = response.data;

    res.status(200).json({token,"username": {username,wallet}});
  } catch (error) {
    res.status(error.response.status).json({message: error.response.data});
  }
}