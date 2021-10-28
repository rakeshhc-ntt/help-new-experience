// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosResponse } from 'axios'
import { testData } from './test-data'

interface TestData {
  activityId: string
}

export function makeTestApiCall(
  accessToken: string | null,
): Promise<AxiosResponse<TestData>> {
  return axios.post<TestData>(
    'https://digitalservices.ref1.bt.com/ideal-oj/secure/activity/',
    testData,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `SMSESSION=${accessToken};`,
      },
      withCredentials: true,
    },
  )
}
