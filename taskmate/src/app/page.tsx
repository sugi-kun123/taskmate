"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("")
  const [taskList, setTaskList] = useState<string[]>([])

  const handleAddTask = () => {
    if (task.trim() === "") return
    setTaskList([...taskList, task])
    setTask("")
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-300 text-gray-900">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold">タスク管理ツール</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="タスクを入力"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleAddTask}
          className="bg-gray-700 text-gray-300 font-bold py-2 px-4 hover:bg-blue-700 rounded"
        >add</button>
        <ul>
          {taskList.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
