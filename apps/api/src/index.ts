import express from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"

import swaggerUi from "swagger-ui-express"
import swaggerJsdoc from "swagger-jsdoc"

const app = express()
const prisma = new PrismaClient()

const PORT = 4000

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
        url: "http://localhost:4000"
      }
    ]
  },
  apis: ["./src/index.ts"]
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// ---------------- END SWAGGER ----------------


/**
 * @swagger
 * /
 *   get:
 *     summary: Health check
 *     responses:
 *       200:
 *         description: API funcionando
 */

// health check
app.get("/", (req, res) => {
  res.json({ message: "API running" })
})


/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     responses:
 *       200:
 *         description: Lista de tareas
 */

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
    res.status(500).json({ error: "Error fetching tasks" })
  }
})


/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crear una tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarea creada
 */

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
    res.status(500).json({ error: "Error creating task" })
  }

})


/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarea eliminada
 */

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
    res.status(500).json({ error: "Error deleting task" })
  }

})


app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})