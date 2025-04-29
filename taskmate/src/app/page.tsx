"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter()
  const [tasks, setTasks] = useState<string[]>([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    setTasks(storedTasks)
  }, [])

  const saveTasks = (taskList: string[]) => {
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
      <ul className="">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            <Link href={`/detail?id=${index}`}>
              <div className="shadow-md p-2 rounded cursor-pointer hover:opacity-60 transition-opacity duration-200">
                {task}
              </div>
            </Link>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white p-1 rounded ml-2"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
      <button
        className="text-2xl shadow-md font-bold bg-green-500 text-white px-4 py-2 rounded fixed right-2 bottom-2"
        onClick={goToRegister}
      >
        タスクを追加する
      </button>
    </div>
  );
}
