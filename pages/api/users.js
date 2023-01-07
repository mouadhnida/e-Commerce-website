import { createUser, getUsers } from '../../libs/prisma/user'


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { users, error } = await getUsers()
      if (error) throw new Error(error.message)
      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const { user, error } = await createUser(data)
      if (error) throw new Error(error)
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

}

