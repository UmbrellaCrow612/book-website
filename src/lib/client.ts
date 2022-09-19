import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'snen3ixq',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
})