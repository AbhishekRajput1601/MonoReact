import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  listRef,
  ...props
}) {
  return (
    <div
      ref={listRef}
      className="space-y-3 mt-4"
    >
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          {...props}
        />
      ))}
    </div>
  );
}