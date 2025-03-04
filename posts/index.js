const express = require('express')
const { randomBytes } = require('crypto')

const app = express()
const PORT = 4000

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body
  posts[id] = {
    id, title
  }
  res.status(201).send(posts[id])
})

app.listen(4000, () => {
  console.log(`POSTS SERVICE is listening on Port ${PORT}`)
})