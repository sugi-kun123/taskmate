"use client";

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Task } from "@/app/types/type"

export default function Home() {
  const router = useRouter()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const storedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]")
    setTasks(storedTasks)
  }, [])

  const saveTasks = (taskList: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(taskList))
  }

  const handleDelete = (index: number) => {
    const newList = [...tasks]
    newList.splice(index, 1)
    setTasks(newList)
    saveTasks(newList)
  }

  const goToRegister = () => {
    router.push("/register")
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-8">タスク一覧</h1>
      <button
        className="text-xl shadow-md font-bold border text-gray px-4 py-2 rounded mb-8"
        type="submit"
        onClick={goToRegister}
      >
        タスクを追加する
      </button>
      <ul className="">
        {tasks.map((task, index) => (
          <li key={index} className="flex mb-2">
            <Link href={`/detail?id=${index}`} className="w-[90%]">
              <div className="shadow-md p-2 rounded cursor-pointer hover:opacity-60 transition-opacity duration-200 flex">
                <p className="font-bold flex-1">{task.task}</p>
                <p className="text-sm text-gray-600 flex-1">ジャンル: {task.genre}</p>
                <p className="text-sm text-gray-600 flex-1">日付: {task.date}</p>
                <p className="text-sm text-gray-600 flex-1">場所: {task.location}</p>
              </div>
            </Link>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white p-1 rounded ml-2 w-[10%]"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
