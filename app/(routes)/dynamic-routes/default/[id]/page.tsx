export default async function Page({
  params: asyncParams,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await asyncParams;
  const { id } = resolvedParams;

  return (
    <div>
      <div className="p-4 bg-gray-800">My dynamic parameter: {id}</div>
    </div>
  );
}
