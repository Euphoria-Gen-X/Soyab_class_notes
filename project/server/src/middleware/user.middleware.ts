import type { Request, Response, NextFunction } from "express";
const ValidAge = (req: Request, res: Response, next: NextFunction) => {
    const age = req.params?.age;
    if (age!==undefined && Number(age) > 18) {
    next();
    }
    return res.send("Age is not greater than 18");
};
module.exports = ValidAge;
