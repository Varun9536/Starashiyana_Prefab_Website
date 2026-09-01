import QRCode from "qrcode";

/** Brand colors so the printed QR still reads as part of the card design. */
const QR_COLORS = { dark: "#45484b", light: "#00000000" };

export function buildCardPath(slug?: string): string {
  return slug ? `/connect/${slug}` : "/connect";
}

export function buildCardUrl(siteUrl: string, slug?: string): string {
  return new URL(buildCardPath(slug), siteUrl).toString();
}

export function generateQrPng(url: string): Promise<Buffer> {
  return QRCode.toBuffer(url, {
    type: "png",
    errorCorrectionLevel: "M",
    margin: 2,
    width: 512,
    color: QR_COLORS,
  });
}

export function generateQrSvg(url: string): Promise<string> {
  return QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: QR_COLORS,
  });
}
