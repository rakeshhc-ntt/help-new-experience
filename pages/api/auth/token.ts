import { NextApiRequest, NextApiResponse } from 'next'
import axios, { Method } from 'axios'
import qs from 'querystring'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, headers } = req
  try {
    const result = await axios.request({
      url: 'https://api-test1.ee.co.uk/v1/identity/token',
      method: method as Method,
      data: qs.stringify(body),
      headers: {
        'content-type': headers['content-type'],
        Authorization:
          'Basic TmpuZ1kwWnI0TlU4QWpQeFQ0TEhkcDBBc2Rqb1gxNVY6cUhMU1JNc2dWUDByUHg1Sw==',
      },
    })
    return res.status(result.status).json(result.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
}
