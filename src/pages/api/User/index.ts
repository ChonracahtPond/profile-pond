// import { Request , Response , NextFunction} from "express"
// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())

// app.get('/Helloworld', function (req:Request , res:Response , next:NextFunction) {
//   res.json({msg: 'Hello , world!'})
// })

// app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })



// import { Request , Response , NextFunction} from "express"

// const express = require('express')
// const app = express()

// app.get('/api', function (req:Request, res:Response) {
//   res.send('Hello World')
// })

// app.listen(3000)



// import express, { Express, Request, Response } from 'express';

// const app: Express = express();

// app.get('/', (req: Request, res: Response) => {
//   res.json({ message: 'Hello World!' });
// });

// app.listen(3000, () => console.log('Server is running on port 3000'));



import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page) || 1;
                const pageSize: number = Number(req.query.pageSize) || 10;

                const user = await prisma.user.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totaluser = await prisma.user.count();
                const totalPage: number = Math.ceil(totaluser / pageSize);
                res.status(200).json({ user });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the user" });
            }
            break;

        case 'POST':
            try {
                const newuser = await prisma.user.create({
                    data: req.body,
                });

                res.status(201).json(newuser);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the user" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}