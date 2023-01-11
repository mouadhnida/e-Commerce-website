import prisma from "../../libs/prisma"
import { schema } from "../../helper/joi_schema"


export default async function handler(req, res) {
    if( req.method === "GET")
    try {
        const items = await prisma.item.findMany({
          orderBy: {
            createdAt: 'desc',
          }
        }
        )
        res.status(200).json({ items: items.length, data: items})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
    if( req.method === "POST") {
        try {
            const data = await schema.validateAsync(req.body)
            const {body} = req
            const item = await prisma.item.create({data: data})
            res.status(201).json({ data: item})
        } catch (error) {
            res.status(500).json({ error: error.message})
        }
    }

}
