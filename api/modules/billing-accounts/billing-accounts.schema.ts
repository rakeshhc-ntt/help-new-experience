import { gql } from 'apollo-server-micro'

export const billingAccountsSchema = gql`
  extend type Query {
    billingAccounts: [BillingAccount!]!
  }

  type BillingAccount {
    accountNumber: String!
    payments: [Payment!]!
    bills: [Bill!]!
  }

  type Payment {
    id: ID
  }

  type Bill {
    invoiceNo: String!
    billAmountGbp: String!
    paymentDueDate: Date
  }
`
