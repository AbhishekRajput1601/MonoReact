export default function TaskInput({
  inputRef,
  inputValue,
  setInputValue,
  priority,
  setPriority,
  dueDate,
  setDueDate, 
  addTask,
}) {
  return (
    <div className="bg-[#2b228e] text-white pb-8 pt-6">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-200 text-sm">
          What do you need to get done?
        </p>

        <h2 className="text-4xl font-bold mt-1">
          My Tasks
        </h2>

        <div className="flex flex-col md:flex-row gap-3 mt-6">
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) =>
              setInputValue(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" && addTask()
            }
            placeholder="Add a new task..."
            className="flex-1 h-12 rounded-lg bg-white text-black px-4 outline-none"
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="h-12 px-3 rounded-lg text-black bg-white"
          >
            <option value="high">
              High Priority
            </option>

            <option value="medium">
              Medium Priority
            </option>

            <option value="low">
              Low Priority
            </option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
            className="h-12 px-3 rounded-lg text-black bg-white"
          />

          <button
            onClick={addTask}
            className="h-12 px-6 rounded-lg bg-emerald-300 text-black font-semibold hover:bg-emerald-400 transition"
          >
            Add Task
          </button>
        </div>

        <p className="text-xs text-indigo-200 mt-2">
          Input automatically focuses after
          every task is added.
        </p>
      </div>
    </div>
  );
}