export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`border w-1/2 py-3 px-5 bg-emerald-500 text-white
      hover:bg-emerald-600 ${className}`}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
}
