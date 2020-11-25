const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.db = router.db
server.use(middlewares)


server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})


server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  if (req.method === 'PUT') {
    req.body.updatedAt = Date.now()
  }
 
  next()
})

server.use(router)
server.use(auth)
server.listen(3000, () => {
  console.log('JSON Server is running')
})