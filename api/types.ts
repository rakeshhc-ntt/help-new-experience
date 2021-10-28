import { Services } from '@btplc/service-catalog'
import { AuthenticatedUser } from './utils/authentication'
import { AxiosInstance } from 'axios'

export interface Context {
  authorization?: string
  services: Services
  dataLoaders: any
  loggedUser: AuthenticatedUser | null
  axiosClient: AxiosInstance
}
