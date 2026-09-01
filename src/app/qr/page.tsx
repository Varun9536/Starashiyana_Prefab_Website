import type { Metadata } from "next";
import { connectCard as card } from "@/config/connectCard";
import { ShareCardPage } from "../connect/ShareCardPage";

export const metadata: Metadata = {
  title: "QR Code",
  robots: { index: false, follow: false },
};

export default function QrPage() {
  return <ShareCardPage card={card} qrImagePath="/connect/qr" />;
}
