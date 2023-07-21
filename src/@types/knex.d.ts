// eslint-disable-next-line
import { knex } from 'knex'

declare module 'knex/types/tables' {
  export interface tables {
    transactions: {
      id: string
      title: string
      amount: number
      create_at: string
      session_id?: string
    }
  }
}
