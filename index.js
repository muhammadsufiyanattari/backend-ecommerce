import express from 'express'
const app = express()
const port = process.env.PORT || 3000
import cors from 'cors'
import { products } from './src/products.js'

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products', (req, res) => {
    res.send(products)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})