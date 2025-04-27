"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Detail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const taskIndex = parseInt(id, 10)
  const [task, setTask] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    // const foundTask = storedTasks.find((t: { id: string, task: string }) => t.id === id)

    let foundTask;

    if (Array.isArray(storedTasks)) {
      if (storedTasks.length > 0 && typeof storedTasks[0] === "string") {
        foundTask = storedTasks[taskIndex];
      } else if (storedTasks.length > 0 && typeof storedTasks[0] === "object") {
        foundTask = storedTasks.find((t: { id: string, task: string }) => t.id === id)?.task;
      }
    }

    if (foundTask) {
      setTask(foundTask)
    }
  }, [id])

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">タスク詳細ページ</h1>
      {task ? (
        <p>このページはタスクID: id: {id} , task: {task}の詳細を見るためのページです。</p>
      ) : (
        <p className="text-red-500">タスクが見つかりません</p>
      )}
    </div>
  );
}
