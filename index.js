const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001;

app.use(cors({
    origin: '*'
}))
    .get('/', (req, res) => {

        res.send({
            slackUsername: 'the-ace',
            backend: true, age: 24,
            bio: "I'm Femi. And I am excited to be a part of the internship!"
        })
    }).listen(port, () => {

        console.log(`Epxress server listening on port ${port}`)
    })

