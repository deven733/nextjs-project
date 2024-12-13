export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-grow border-4 border-purple-500">
      {/* Header */}
      <header className="border-b border-1 border-purple-500 p-4 text-white">
        <h1 className="text-2xl font-bold">Basics Route Layout Header</h1>
      </header>

      {/* Main content */}
      <div className="flex-grow p-4">
        <div className="text-purple-500 mb-2">
          Basics Route Layout (children)
        </div>
        {children}
      </div>

      {/* Footer */}
      <footer className="border-t border-1 border-purple-500 p-4 text-white">
        <p>Basics Route Layout Footer</p>
      </footer>
    </div>
  );
}
