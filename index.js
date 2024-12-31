import express from 'express'
const app = express()
const port = process.env.PORT || 3000
import cors from 'cors'
import { products } from './src/products.js'
//  const products=[]
app.use(cors())
// app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products', (req, res) => {
    res.send(products)
  })
//   app.post('/products/post', (req, res) => {
//     console.log('POST /products' ,req.body);
//   products.push(req.body)
//     res.send(products)
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})