import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import StatsCards from "./components/StatsCards";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";
import FooterNotes from "./components/FooterNotes";

import useLocalStorage from "./hooks/useLocalStorage";

import initialTasks from "./data/initialTasks";

import { filterTasks } from "./utils/taskFilters";
import { sortTasksByDate } from "./utils/taskSort";
import { reorderTasks } from "./utils/dragAndDrop";

export default function App() {
  const [tasks, setTasks] =
    useLocalStorage(
      "tasks",
      initialTasks
    );

  const [inputValue, setInputValue] =
    useState("");

  const [priority, setPriority] =
    useState("medium");

  const [dueDate, setDueDate] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  const [editingId, setEditingId] =
    useState(null);

  const [editValue, setEditValue] =
    useState("");

  const inputRef = useRef(null);
  const editRef = useRef(null);
  const listRef = useRef(null);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (editingId) {
      editRef.current?.focus();
    }
  }, [editingId]);

  const addTask = () => {
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      done: false,
      priority,
      dueDate,
    };

    setTasks((prev) => [
      ...prev,
      newTask,
    ]);

    setInputValue("");
    setPriority("medium");
    setDueDate("");

    inputRef.current?.focus();
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              done: !task.done,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter(
        (task) => task.id !== id
      )
    );
  };

  const saveEdit = () => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === editingId
          ? {
              ...task,
              text: editValue,
            }
          : task
      )
    );

    setEditingId(null);
    setEditValue("");
  };

  const handleSort = () => {
    const reordered =
      reorderTasks(
        tasks,
        dragItem.current,
        dragOverItem.current
      );

    setTasks(reordered);

    dragItem.current = null;
    dragOverItem.current = null;
  };

  const visibleTasks = useMemo(() => {
    const filtered = filterTasks(
      tasks,
      filter
    );

    return sortTasksByDate(
      filtered
    );
  }, [tasks, filter]);

  const total = tasks.length;

  const completed =
    tasks.filter(
      (task) => task.done
    ).length;

  const active =
    total - completed;

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <TaskInput
        inputRef={inputRef}
        inputValue={inputValue}
        setInputValue={setInputValue}
        priority={priority}
        setPriority={setPriority}
        dueDate={dueDate}
        setDueDate={setDueDate}
        addTask={addTask}
      />

      <div className="max-w-6xl mx-auto px-6 py-6">
        <StatsCards
          total={total}
          completed={completed}
          remaining={active}
        />

        <FilterTabs
          filter={filter}
          setFilter={setFilter}
          total={total}
          active={active}
          completed={completed}
        />

        <TaskList
          tasks={visibleTasks}
          listRef={listRef}
          editingId={editingId}
          editValue={editValue}
          setEditValue={setEditValue}
          setEditingId={setEditingId}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          saveEdit={saveEdit}
          editRef={editRef}
          dragItem={dragItem}
          dragOverItem={dragOverItem}
          handleSort={handleSort}
        />

        <FooterNotes />
      </div>
    </div>
  );
}