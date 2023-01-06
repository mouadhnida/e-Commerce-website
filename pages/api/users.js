import { createUsers, getUsers } from '../../libs/prisma/user'

import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@prisma/client'


export default async function handler( req, res) {
  if(req.method === "GET") {
  try {
    const { users, error } = await getUsers();
    if(error) throw new Error(error)
    return res.status(200).json( users);
  } catch (error) {
    return res.status(500).json({ error: error.message});
  }
} if(req.method === "POST") {
    try {
      const data = req.body
      const { newUser, error } = await createUsers(data);
      if(error) throw new Error(error)
      return res.status(200).json( newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message});
      
    }
}
}
