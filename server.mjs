import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const port = 8000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const router = express.Router()

router.use(express.static(__dirname + '/build'))

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.use('/', router)

app.listen(port, () => {
    console.log(`Live @ localhost:${port}`)
})