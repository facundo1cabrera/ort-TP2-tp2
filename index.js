
import express from 'express'
import peopleRoutes from './routes/peopleRouter.js'

const PORT = 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", peopleRoutes);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
app.on("Error", (error)=> console.log(`Server error: ${error}`))
