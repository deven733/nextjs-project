export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col border-4 border-red-400">
      {/* Main content */}
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
}

