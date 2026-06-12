export default function FooterNotes() {
  return (
    <div className="grid md:grid-cols-2 gap-5 mt-8">
      <div className="bg-white rounded-xl border p-5">
        <h3 className="font-bold text-indigo-700 mb-3">
          USESTATE CONTROLS
        </h3>

        <ul className="space-y-2 text-sm">
          <li>
            • tasks - stores all task
            objects
          </li>
          <li>
            • inputValue - controlled
            input
          </li>
          <li>
            • filter - active filter
          </li>
          <li>
            • editingId - current task
            being edited
          </li>
          <li>
            • editValue - editing field
            value
          </li>
          <li>
            • priority - selected
            priority
          </li>
          <li>
            • dueDate - selected due
            date
          </li>
        </ul>
      </div>

      <div className="bg-orange-50 border border-orange-300 rounded-xl p-5">
        <h3 className="font-bold text-orange-700 mb-3">
          USEREF HANDLES
        </h3>

        <ul className="space-y-2 text-sm">
          <li>
            • inputRef - focus add task
            input
          </li>
          <li>
            • editRef - focus edit input
          </li>
          <li>
            • listRef - task list
            container
          </li>
          <li>
            • dragItem - dragged task
            index
          </li>
          <li>
            • dragOverItem - drop target
            index
          </li>
        </ul>
      </div>
    </div>
  );
}