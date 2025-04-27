"use client";

import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function Register() {
  const [task, setTask] = useState<string>("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (task.trim() === "") return

    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    storedTasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(storedTasks))

    setTask("")
    router.push("/")
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">タスクを登録する</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 mr-2"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="タスク内容を入力"
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          登録
        </button>
      </form>
    </div>

  )
}
