import { connectCard as card } from "@/config/connectCard";
import { ConnectCardPage, connectCardMetadata } from "./ConnectCardPage";

export const metadata = connectCardMetadata(card);

export default function ConnectPage() {
  return <ConnectCardPage card={card} />;
}
