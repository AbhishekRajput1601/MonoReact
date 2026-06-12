# TaskFlow - Advanced React ToDo Application

## Overview

TaskFlow is a fully featured task management application built with React, Tailwind CSS, and Lucide React icons.

The project demonstrates practical usage of:

- React Hooks
- useState
- useRef
- useEffect
- Custom Hooks
- Local Storage Persistence
- Drag and Drop
- Controlled Components
- Inline Editing
- Task Filtering
- Due Date Sorting
- Component-Based Architecture

This project satisfies all assignment requirements and all bonus challenges.

---

## Features

### Task Management

Users can:

- Create new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- View active tasks
- View completed tasks
- View all tasks

---

### Priority Levels

Each task can be assigned a priority level:

- High
- Medium
- Low

Priority is displayed using a colored indicator.

| Priority | Color |
|-----------|--------|
| High | Red |
| Medium | Yellow |
| Low | Green |

Purpose:

- Helps users identify important tasks quickly
- Improves task organization

---

### Due Date Management

Each task supports a due date.

Users can:

- Select a due date while creating a task
- View due dates in the task list

Tasks are automatically sorted by nearest due date.

Benefits:

- Urgent tasks appear first
- Better planning and prioritization

---

### Local Storage Persistence

Tasks are saved automatically in browser localStorage.

Benefits:

- Data remains available after page refresh
- No backend required
- Better user experience

Workflow:

1. User adds or updates a task
2. Tasks state changes
3. localStorage updates automatically
4. On page reload tasks are restored

---

### Drag and Drop Reordering

The application supports task reordering using the HTML5 Drag API.

Users can:

- Drag a task
- Drop it into a new position
- Reorder their task list

Benefits:

- Flexible task organization
- Improved usability

---

### Inline Editing

Tasks can be edited directly inside the task list.

Workflow:

1. Click Edit button
2. Task enters edit mode
3. Input automatically receives focus
4. User updates task text
5. Press Enter or Save
6. Task updates instantly

Press Escape to cancel editing.

---

### Filtering

Users can filter tasks by:

- All
- Active
- Completed

Filtering is derived from the original tasks array and is never stored separately.

Benefits:

- Single source of truth
- Cleaner state management

---

### Statistics Dashboard

The application automatically calculates:

- Total Tasks
- Completed Tasks
- Remaining Tasks

Statistics update instantly whenever task data changes.

---

## Technologies Used

### React

Used for:

- Component architecture
- State management
- Rendering UI

---

### Tailwind CSS

Used for:

- Layout
- Styling
- Responsive design
- Spacing and typography

Benefits:

- Utility-first CSS
- Faster development
- Consistent UI

---

### Lucide React

Used for:

- Edit button
- Save button
- Delete button
- Application branding

Benefits:

- Lightweight
- Tree-shakeable
- Modern icon set

---

## Project Structure

```text
src
│
├── components
│   ├── Header.jsx
│   ├── TaskInput.jsx
│   ├── StatsCards.jsx
│   ├── FilterTabs.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── FooterNotes.jsx
│
├── hooks
│   └── useLocalStorage.js
│
├── utils
│   ├── taskFilters.js
│   ├── taskSort.js
│   └── dragAndDrop.js
│
├── data
│   └── initialTasks.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Component Responsibilities

## Header

Responsible for:

- Branding
- Greeting section
- Application title

---

## TaskInput

Responsible for:

- Adding tasks
- Priority selection
- Due date selection
- Input handling

---

## StatsCards

Responsible for displaying:

- Total tasks
- Completed tasks
- Remaining tasks

---

## FilterTabs

Responsible for:

- Active filter selection
- Displaying filter counts

---

## TaskList

Responsible for:

- Rendering task collection
- Passing task data to TaskItem

---

## TaskItem

Responsible for:

- Displaying task information
- Editing
- Deleting
- Completing tasks
- Drag-and-drop behavior

---

## FooterNotes

Displays educational notes regarding:

- useState
- useRef

---

# Custom Hook

## useLocalStorage

Location:

```text
hooks/useLocalStorage.js
```

Purpose:

- Synchronize React state with localStorage
- Persist task data automatically

Implementation:

```javascript
const [tasks, setTasks] =
  useLocalStorage(
    "tasks",
    initialTasks
  );
```

Benefits:

- Reusable
- Cleaner code
- Separation of concerns

---

# Utility Functions

## taskFilters.js

Purpose:

Filter tasks based on:

- All
- Active
- Completed

Benefits:

- Keeps filtering logic outside App.jsx
- Improves readability

---

## taskSort.js

Purpose:

Sort tasks by nearest due date.

Benefits:

- Cleaner App component
- Reusable sorting logic

---

## dragAndDrop.js

Purpose:

Handle drag-and-drop task reordering.

Benefits:

- Reusable logic
- Easier maintenance

---

# State Management

## tasks

Stores all tasks.

```javascript
const [tasks, setTasks]
```

Task structure:

```javascript
{
  id: 1,
  text: "Build registration form",
  done: false,
  priority: "high",
  dueDate: "2026-06-20"
}
```

---

## inputValue

Stores current add-task input.

```javascript
const [inputValue, setInputValue]
```

---

## filter

Stores active filter.

```javascript
const [filter, setFilter]
```

Possible values:

```javascript
"all"
"active"
"completed"
```

---

## priority

Stores selected task priority.

```javascript
const [priority, setPriority]
```

---

## dueDate

Stores selected due date.

```javascript
const [dueDate, setDueDate]
```

---

## editingId

Stores currently edited task.

```javascript
const [editingId, setEditingId]
```

---

## editValue

Stores edit input value.

```javascript
const [editValue, setEditValue]
```

---

# useRef Usage

## inputRef

Purpose:

- Focus input on page load
- Focus input after adding task

```javascript
const inputRef = useRef(null);
```

---

## editRef

Purpose:

- Focus edit input automatically

```javascript
const editRef = useRef(null);
```

---

## listRef

Purpose:

- Reference task list container

```javascript
const listRef = useRef(null);
```

---

## dragItem

Purpose:

Store dragged item index.

```javascript
const dragItem = useRef(null);
```

---

## dragOverItem

Purpose:

Store drop target index.

```javascript
const dragOverItem = useRef(null);
```

---

# Application Workflow

## Initial Load

1. React renders App component
2. useLocalStorage checks localStorage
3. Saved tasks are loaded
4. Input field receives focus

---

## Add Task Flow

1. User enters task title
2. Selects priority
3. Selects due date
4. Clicks Add Task
5. Task object is created
6. Task added to state
7. localStorage updates
8. Input field re-focuses

---

## Toggle Task Flow

1. User clicks checkbox
2. Task completion status changes
3. State updates
4. UI re-renders

---

## Edit Task Flow

1. User clicks Edit
2. editingId is set
3. Task switches to edit mode
4. editRef focuses input
5. User saves changes
6. State updates

---

## Delete Task Flow

1. User clicks Delete
2. Task removed using filter()
3. State updates
4. UI re-renders

---

## Filter Flow

1. User selects filter
2. Filter state updates
3. filterTasks() runs
4. Matching tasks displayed

---

## Sort Flow

1. Filtered tasks generated
2. sortTasksByDate() runs
3. Nearest due dates appear first

---

## Drag and Drop Flow

1. User starts dragging task
2. dragItem stores source index
3. dragOverItem stores destination index
4. Task dropped
5. reorderTasks() runs
6. State updates
7. New order displayed

---

# Assignment Requirements Checklist

## Core Requirements

| Requirement | Status |
|------------|---------|
| Add Task | Completed |
| Toggle Task | Completed |
| Delete Task | Completed |
| Filter Tasks | Completed |
| Summary Statistics | Completed |
| Inline Editing | Completed |
| useRef Auto Focus | Completed |
| useRef Edit Focus | Completed |

---

## Bonus Requirements

| Requirement | Status |
|------------|---------|
| localStorage Persistence | Completed |
| Priority Levels | Completed |
| Priority Colored Dot | Completed |
| Due Date Picker | Completed |
| Sort By Due Date | Completed |
| Drag & Drop Reordering | Completed |

---

# Installation

Clone repository:

```bash
git clone <repository-url>
```

Navigate into project:

```bash
cd taskflow
```

Install dependencies:

```bash
npm install
```

Install Lucide Icons:

```bash
npm install lucide-react
```

Start development server:

```bash
npm run dev
```

---

# Learning Outcomes

This project demonstrates understanding of:

- React Component Architecture
- useState
- useRef
- useEffect
- Custom Hooks
- Local Storage
- Controlled Forms
- Drag and Drop APIs
- Derived State
- Component Communication
- Tailwind CSS
- Code Organization
- Reusable Utilities
- Modern React Best Practices

---

# Author

TaskFlow React ToDo Application

Built as part of a React.js Assignment focusing on React Hooks, useRef, state management, and reusable component architecture.