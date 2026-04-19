import type{ Request, Response } from "express";
const Profile = (req: Request, res: Response) => {
    // Access the username parameter from the URL
    // 1. Using req.params
    // const username = req.params.username;
    // const age = req.params.age;

    // 2. Using destructuring assignment
    const {username, age } = req.params;
    const {address, college} = req.query;
    


    return res.send(`Profile Page for ${username}, Age: ${age}, Address: ${address}, College: ${college}`);
}
module.exports = {
    Profile
};