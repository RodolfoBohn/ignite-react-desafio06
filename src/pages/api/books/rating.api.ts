import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method !== 'GET') {
    return res.status(405).end()
  }

  const users = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc'
    },
    include: {
      book: true, 
      user: true
    }
  })
  res.status(200).json(users)
}
