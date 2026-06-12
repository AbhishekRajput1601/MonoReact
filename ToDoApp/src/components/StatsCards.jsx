function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white rounded-xl border p-5 text-center shadow-sm">
      <h2
        className={`text-4xl font-bold ${color}`}
      >
        {value}
      </h2>

      <p className="text-gray-500 mt-1">
        {title}
      </p>
    </div>
  );
}

export default function StatsCards({
  total,
  completed,
  remaining,
}) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <StatCard
        title="Total Tasks"
        value={total}
        color="text-indigo-600"
      />

      <StatCard
        title="Completed"
        value={completed}
        color="text-green-600"
      />

      <StatCard
        title="Remaining"
        value={remaining}
        color="text-red-500"
      />
    </div>
  );
}