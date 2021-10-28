import DataLoader from 'dataloader'
import { ApiSearchAddressResult, Services } from '@btplc/service-catalog'

export const dataLoaders = (services: Services) => ({
  addressLoader: new DataLoader<string, ApiSearchAddressResult>(async (ids) => {
    return Promise.all(
      ids.map((id) => {
        return services.addresses.getAddressById(id, { mock: true })
      })
    )
  }),
})
