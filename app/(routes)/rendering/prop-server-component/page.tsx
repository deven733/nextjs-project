import ClientWrapper from "./ClientWrapper";
import ServerComponent from "./ServerComponent";

export default function Page() {
  return (
    <ClientWrapper>
      <ServerComponent />
    </ClientWrapper>
  );
}
