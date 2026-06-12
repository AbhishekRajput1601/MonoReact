import {
  Check,
  Pencil,
  Trash2,
} from "lucide-react";

export default function TaskItem({
  task,
  index,
  editingId,
  editValue,
  setEditValue,
  setEditingId,
  toggleTask,
  deleteTask,
  saveEdit,
  editRef,
  dragItem,
  dragOverItem,
  handleSort,
}) {
  const priorityColor = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  };

  return (
    <div
      draggable
      onDragStart={() =>
        (dragItem.current = index)
      }
      onDragEnter={() =>
        (dragOverItem.current = index)
      }
      onDragEnd={handleSort}
      onDragOver={(e) =>
        e.preventDefault()
      }
      className={`bg-white rounded-xl border p-4 flex justify-between items-center shadow-sm cursor-move ${
        editingId === task.id
          ? "border-indigo-500"
          : ""
      }`}
    >
      <div className="flex items-center gap-4 flex-1">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() =>
            toggleTask(task.id)
          }
          className="w-5 h-5"
        />

        <div
          className={`w-3 h-3 rounded-full ${
            priorityColor[task.priority]
          }`}
        />

        {editingId === task.id ? (
          <input
            ref={editRef}
            value={editValue}
            onChange={(e) =>
              setEditValue(
                e.target.value
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter")
                saveEdit();

              if (e.key === "Escape")
                setEditingId(null);
            }}
            className="border rounded-lg px-3 py-1 flex-1 outline-none"
          />
        ) : (
          <p
            onDoubleClick={() => {
              setEditingId(task.id);
              setEditValue(task.text);
            }}
            className={`flex-1 cursor-pointer ${
              task.done
                ? "line-through text-gray-400"
                : ""
            }`}
          >
            {task.text}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500">
          {task.dueDate
            ? new Date(
                task.dueDate
              ).toLocaleDateString()
            : "No Date"}
        </span>

        {editingId === task.id ? (
          <button
            onClick={saveEdit}
            className="p-2 rounded bg-green-100"
          >
            <Check size={16} />
          </button>
        ) : (
          <button
            onClick={() => {
              setEditingId(task.id);
              setEditValue(task.text);
            }}
            className="p-2 rounded bg-indigo-100"
          >
            <Pencil size={16} />
          </button>
        )}

        <button
          onClick={() =>
            deleteTask(task.id)
          }
          className="p-2 rounded bg-red-100 text-red-500"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}