export default function FilterTabs({
  filter,
  setFilter,
  total,
  active,
  completed,
}) {
  const tabs = [
    {
      label: "all",
      count: total,
    },
    {
      label: "active",
      count: active,
    },
    {
      label: "completed",
      count: completed,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() =>
            setFilter(tab.label)
          }
          className={`px-4 py-2 rounded-full font-medium transition ${
            filter === tab.label
              ? "bg-indigo-600 text-white"
              : "bg-white border"
          }`}
        >
          {tab.label
            .charAt(0)
            .toUpperCase() +
            tab.label.slice(1)}

          <span className="ml-2 text-xs">
            ({tab.count})
          </span>
        </button>
      ))}
    </div>
  );
}