import { cookies } from "next/headers";

export default async function Page() {
  // This part can be rendered before the request
  const staticContent = (
    <h1 className="text-xl font-bold">Rendering strategies</h1>
  );

  // These parts need to wait for the request
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  const dynamicContent = (
    <div className="mt-4">
      <p>Your theme preference is: {theme?.value || "default"}</p>
    </div>
  );

  return (
    <div className="p-6">
      {staticContent}
      {dynamicContent}
    </div>
  );
}
