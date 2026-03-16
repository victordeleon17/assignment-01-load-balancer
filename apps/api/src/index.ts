import express from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"

import swaggerUi from "swagger-ui-express"
import swaggerJsdoc from "swagger-jsdoc"

const app = express()
const prisma = new PrismaClient()

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// ---------------- SWAGGER CONFIG ----------------

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tasks API",
      version: "1.0.0",
      description: "Simple Tasks API documentation"
    },
    servers: [
      {
        url: process.env.RAILWAY_PUBLIC_DOMAIN
          ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
          : `http://localhost:${PORT}`
      }
    ]
  },
  apis: ["./src/index.ts"]
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// ---------------- END SWAGGER ----------------


// health check
app.get("/", (req, res) => {
  res.json({ message: "API running" })
})


// ---------------- TASK ROUTES ----------------

// obtener tareas
app.get("/tasks", async (req, res) => {
  try {

    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })

    res.json(tasks)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error fetching tasks" })
  }
})


// crear tarea
app.post("/tasks", async (req, res) => {

  try {

    const { title } = req.body

    if (!title) {
      return res.status(400).json({ error: "Title is required" })
    }

    const task = await prisma.task.create({
      data: {
        title
      }
    })

    res.json(task)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error creating task" })
  }

})


// eliminar tarea
app.delete("/tasks/:id", async (req, res) => {

  try {

    const id = Number(req.params.id)

    const task = await prisma.task.findUnique({
      where: { id }
    })

    if (!task) {
      return res.status(404).json({ error: "Task not found" })
    }

    await prisma.task.delete({
      where: { id }
    })

    res.json({
      message: "Task deleted successfully"
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error deleting task" })
  }

})


// ---------------- SERVER ----------------

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`)
})