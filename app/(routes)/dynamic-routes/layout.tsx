export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col border-4 border-gray-400">
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
}
