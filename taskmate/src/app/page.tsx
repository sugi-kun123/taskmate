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

  const goToRegister = () => {
    router.push("/register")
  };

  return (
    <div className="p-4 bg-gray-200 text-gray-600">
      <div className="container mx-auto">
        <h1 className="text-2xl mb-4">タスク一覧</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="mb-2">
              <Link href={`/detail?id=${index}`}>
                <div className="shadow-md p-2 rounded cursor-pointer hover:bg-gray-100">
                  {task}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={goToRegister}
        >
          タスクを登録する
        </button>

      </div>
    </div>
  );
}
