export default function Section({ title, icon, children }) {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-blue-600">{icon}</div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {children}
    </section>
  );
}