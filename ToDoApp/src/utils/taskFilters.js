export const filterTasks = (
  tasks,
  filter
) => {
  switch (filter) {
    case "active":
      return tasks.filter(
        (task) => !task.done
      );

    case "completed":
      return tasks.filter(
        (task) => task.done
      );

    default:
      return tasks;
  }
};