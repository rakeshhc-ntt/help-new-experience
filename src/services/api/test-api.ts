import axios from 'axios'
import { testData } from './test-data'

export function makeTestApiCall(accessToken) {
  return axios.post(
    'https://digitalservices.ref1.bt.com/ideal-oj/secure/activity/',
    testData,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `SMSESSION=${accessToken};`,
      },
      withCredentials: true,
    }
  )
}
