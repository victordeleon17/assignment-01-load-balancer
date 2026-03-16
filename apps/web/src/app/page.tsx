"use client"

import { useEffect, useState } from "react"

type Task = {
  id: number
  title: string
}

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState("")

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

  const fetchTasks = async () => {
    const res = await fetch(`${API_URL}/tasks`)
    const data = await res.json()
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const createTask = async () => {

    if (!title.trim()) return

    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    })

    setTitle("")
    fetchTasks()
  }

  const deleteTask = async (id: number) => {

    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE"
    })

    fetchTasks()
  }

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial"
    }}>

      <h1 style={{ marginBottom: 20 }}>Tasks App</h1>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nueva tarea"
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={createTask}
          style={{
            padding: "10px 20px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          Crear
        </button>

      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>

        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #eee"
            }}
          >

            {task.title}

            <button
              onClick={() => deleteTask(task.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: 4,
                cursor: "pointer"
              }}
            >
              eliminar
            </button>

          </li>
        ))}

      </ul>

    </div>
  )
}