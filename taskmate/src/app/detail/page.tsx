"use client";

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Task } from "@/app/types/type"

export default function Detail() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const taskIndex = parseInt(id ?? "", 10)
  const [task, setTask] = useState<Task | null>(null)

  useEffect(() => {
    if (isNaN(taskIndex)) return
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    if (Array.isArray(storedTasks) && storedTasks[taskIndex]) {
      setTask(storedTasks[taskIndex])
    }
  }, [taskIndex])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">タスク詳細ページ</h1>
      {task ? (
        <div className="space-y-2">
          <p><strong>タスク内容:</strong> {task.task}</p>
          <p><strong>ジャンル:</strong> {task.genre}</p>
          <p><strong>日時:</strong> {task.date}</p>
          <p><strong>場所:</strong> {task.location}</p>
        </div>
      ) : (
        <p className="text-red-500">タスクが見つかりません</p>
      )}
    </div>
  );
}
