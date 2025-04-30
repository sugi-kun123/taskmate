"use client";

import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function Register() {
  const router = useRouter()

  const [taskData, setTaskData] = useState({
    task: "",
    genre: "",
    date: "",
    location: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskData.task.trim() === "") return

    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    storedTasks.push(taskData)
    localStorage.setItem("tasks", JSON.stringify(storedTasks))

    setTaskData({
      task: "",
      genre: "",
      date: "",
      location: "",
    })
    router.push("/")
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">タスクを登録する</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full"
          type="text"
          name="task"
          value={taskData.task}
          onChange={handleChange}
          placeholder="タスク内容を入力"
        />
        <select
          className="border p-2 w-full"
          name="genre"
          value={taskData.genre}
          onChange={handleChange}
        >
          <option value="">ジャンルを選択</option>
          <option value="仕事">仕事</option>
          <option value="勉強">勉強</option>
          <option value="趣味">趣味</option>
        </select>
        <input
          className="border p-2 w-full"
          type="date"
          name="date"
          value={taskData.date}
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          type="text"
          name="location"
          value={taskData.location}
          onChange={handleChange}
          placeholder="場所を入力"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded w-full"
          type="submit"
        >
          登録
        </button>
      </form>
    </div>

  )
}
