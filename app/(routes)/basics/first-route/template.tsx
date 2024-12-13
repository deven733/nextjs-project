import Button from "@/app/components/Button";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border-4 border-dashed border-green-500">
      <div className="text-green-500 mb-2">First Route Template</div>
      <div className="mb-4">
        <Button />
      </div>
      {children}
    </div>
  );
}
