import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method !== 'GET') {
    return res.status(405).end()
  }

  const books = await prisma.book.findMany({ 
    orderBy: {
      ratings: {
        _count: 'desc'
      }
    },
    take: 4,
  })

  const response = await Promise.all(books.map( async (bookOnList) => {
    const rate = await prisma.rating.aggregate({
      where: {
        book: {
          id: bookOnList.id
        }
      },
      _avg: {
        rate: true,
      }
    })

    return {
      ...bookOnList, 
      rate: rate._avg.rate
    }
  }))

  res.status(200).json(response)
}
