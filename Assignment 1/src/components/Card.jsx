export default function Card({ children }) {
  return (
    <div className="border border-slate-200 rounded-xl p-5 hover:shadow-md transition">
      {children}
    </div>
  );
}