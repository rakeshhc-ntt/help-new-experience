import { Context } from '../../types'

function billingAccounts(parent: any, args: any, context: Context) {
  return context.loggedUser['billing-accounts']
}

export const BillingAccount = {
  bills: async (billingAccount: any, args: any, context: Context) => {
    const url = billingAccount.links.find((link) => link.rel === 'bills').href
    const result = await context.axiosClient.get(url)
    return result.data.bills
  },

  payments: async (billingAccount: any, args: any, context: Context) => {
    const url = billingAccount.links.find((link) => link.rel === 'payments')
      .href
    const result = await context.axiosClient.get(url)
    return result.data.payments
  },
}

export const billingAccountsQueries = {
  billingAccounts,
}
