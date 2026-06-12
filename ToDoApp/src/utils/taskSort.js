export const sortTasksByDate = (
  tasks
) => {
  return [...tasks].sort(
    (a, b) =>
      new Date(
        a.dueDate || "9999-12-31"
      ) -
      new Date(
        b.dueDate || "9999-12-31"
      )
  );
};