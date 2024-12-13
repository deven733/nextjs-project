export default function ServerComponent() {
  return (
    <div className="p-4 border-2 border-gray-400 border-dashed">
      {new Date().toLocaleTimeString()}
    </div>
  );
}
