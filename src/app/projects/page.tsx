'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar'; // perhatikan path ini

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type Filter = 'all' | 'completed' | 'incomplete';

export default function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [filter, setFilter] = useState<Filter>('all');
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false); // ✅ cegah flash/reset data

  // 🧩 Jalankan hanya di sisi client
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // 💾 Simpan otomatis ke localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, mounted]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEdit = (id: number, text: string) => {
    setEditingId(id);
    setInput(text);
  };

  const saveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editingId ? { ...task, text: input.trim() } : task
    ));
    setEditingId(null);
    setInput('');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  if (!mounted) return null; // ✅ pastikan tidak render di SSR

  return (
    <main
      className={`min-h-screen px-6 py-20 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-black via-slate-900 to-gray-900 text-white'
          : 'bg-gradient-to-b from-gray-100 via-white to-gray-200 text-gray-800'
      }`}
    >
      <Navbar />

      <div className="max-w-2xl mx-auto">

        {/* 🌗 Theme Toggle */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              darkMode
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-gray-800/10 hover:bg-gray-800/20 text-gray-700'
            }`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">To-Do List App 📝</h1>

        {/* Input + Buttons */}
        <div
          className={`p-6 rounded-2xl shadow-lg backdrop-blur-md border mb-8 ${
            darkMode
              ? 'bg-white/10 border-white/10'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={editingId ? "Edit your task..." : "Add a new task..."}
              className={`flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                darkMode
                  ? 'bg-white/20 text-white placeholder-gray-400 focus:ring-purple-500'
                  : 'bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-purple-400'
              }`}
              onKeyDown={(e) => e.key === 'Enter' && (editingId ? saveEdit() : addTask())}
            />
            <button
              onClick={editingId ? saveEdit : addTask}
              className={`px-6 py-2 rounded-lg font-medium transition-opacity shadow-lg ${
                editingId
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
              } hover:opacity-90`}
            >
              {editingId ? 'Save' : 'Add'}
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            {(['all', 'completed', 'incomplete'] as Filter[]).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1 rounded-lg text-sm transition-colors ${
                  filter === type
                    ? 'bg-purple-500/60 text-white'
                    : darkMode
                    ? 'bg-white/10 hover:bg-white/20'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}

            {/* Sort Dropdown */}
            <select
              onChange={(e) => {
                const sort = e.target.value;
                if (sort === 'completed-first') {
                  setTasks([...tasks].sort((a, b) => Number(b.completed) - Number(a.completed)));
                } else if (sort === 'incomplete-first') {
                  setTasks([...tasks].sort((a, b) => Number(a.completed) - Number(b.completed)));
                }
              }}
              className={`px-4 py-1 rounded-lg text-sm focus:outline-none ${
                darkMode
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-gray-200 border border-gray-300'
              }`}
            >
              <option value="">Sort Tasks</option>
              <option value="completed-first">Completed First</option>
              <option value="incomplete-first">Incomplete First</option>
            </select>
          </div>

          {/* Clear All */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                if (confirm('Are you sure you want to delete all tasks?')) {
                  setTasks([]);
                }
              }}
              className="px-6 py-2 bg-red-500/30 text-red-300 rounded-lg hover:bg-red-500/50 transition-colors text-sm"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mb-4 text-gray-300">
          <p>
            Completed: {tasks.filter(t => t.completed).length} / {tasks.length} tasks
          </p>
        </div>

        {/* Task List */}
        <AnimatePresence>
          {filteredTasks.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 text-center"
            >
              No tasks yet. Add one above!
            </motion.p>
          ) : (
            filteredTasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                layout
                className={`p-4 mb-3 rounded-2xl shadow-lg backdrop-blur-md border flex items-center justify-between transition-all duration-300 hover:scale-[1.02] ${
                  darkMode
                    ? 'bg-white/10 border-white/10'
                    : 'bg-white border-gray-200'
                } ${task.completed ? 'opacity-60 line-through' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 text-purple-500 bg-white/20 border-white/30 rounded focus:ring-purple-500"
                  />
                  <span className="text-lg">{task.text}</span>
                </div>

                <div className="flex gap-2">
                  {!task.completed && (
                    <button
                      onClick={() => startEdit(task.id, task.text)}
                      className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/40 transition-colors"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/40 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
