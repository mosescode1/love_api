import prisma from "../../prisma";
import {Request, Response, NextFunction} from "express";


class MessageHandler{

    async CreateMessage(req:Request, res:Response, __:NextFunction): Promise<Response>{
        if (!req.body.message) return res.status(400).json({message: "Message is required"})
        const message = await prisma.message.create({
            data: {
                messages:  req.body.message,
            }
        })
        return res.status(200).json(message)
    }

    async GetRandomMessage(_ :Request, res:Response, __:NextFunction): Promise<Response>{
        const count = await prisma.message.count(); // Get the total count of
        // posts
        const randomOffset = Math.floor(Math.random() * count); // Generate a random offset
        const message = await prisma.message.findMany({
            skip: randomOffset,
            take: 1,
        })
        return res.status(200).json(message)
    }

}

export default new MessageHandler();