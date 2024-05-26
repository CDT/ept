const express = require('express')
const app = express()

// Define some dummy data
const data = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
]

// Middleware to parse JSON request bodies
app.use(express.json())

// GET /api/data
app.get('/api/data', (req, res) => {
  res.json(data)
})

// GET /api/data/:id
app.get('/api/data/:id', (req, res) => {
  const item = data.find(d => d.id === parseInt(req.params.id))
  if (item) {
    res.json(item)
  } else {
    res.status(404).json({ error: 'Data not found' })
  }
})

// Start the server
const port = 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})