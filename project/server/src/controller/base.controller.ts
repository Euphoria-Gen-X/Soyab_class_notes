import type{ Request, Response } from "express";
const Base = (req: Request, res: Response) => {
    return res.send("Hello World");
}
module.exports = Base;