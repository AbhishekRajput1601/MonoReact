export const reorderTasks = (
  tasks,
  startIndex,
  endIndex
) => {
  const updatedTasks = [...tasks];

  const [draggedTask] =
    updatedTasks.splice(
      startIndex,
      1
    );

  updatedTasks.splice(
    endIndex,
    0,
    draggedTask
  );

  return updatedTasks;
};