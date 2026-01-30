const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  // 1: init
  // 2: the one with deploy hook
  // 3: the non-healthy one
  // 4: back to the correct one
  res.send('3') // change this string to ensure a new version deployed
})

app.get('/healthz', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('Unhealthy bumpkin')
  res.status(200).send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) // no-console
})
