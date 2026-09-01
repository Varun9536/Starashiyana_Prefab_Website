/**
 * Details shown on the /connect digital business card — what the QR code
 * printed on the physical card opens. No database — this is a plain config
 * file like `siteConfig`. To update a detail (phone, address, etc.), edit
 * this file and redeploy the site; the QR code itself never changes because
 * it only ever points at /connect.
 */
export const connectCard = {
  name: "Tanishq Premi",
  designation: "Managing Director",
  company: "Starashiyana Prefab LLP",
  phone: "+918285976527",
  whatsappPhone: "+918285976527",
  email: "premi.tanishq@gmail.com",
  emailSecondary: "starashiyana.prefab@gmail.com",
  website: "https://www.starashiyanaprefab.com/",
  factoryAddress:
    "Khewat No. 138, Khatoni No. 139, Kila No. 16, Rajpura, Near Alamgirpur, Dharuhera, District Rewari, Haryana – 123110, India",
  factoryMapUrl: "https://maps.app.goo.gl/AbTafTUvzhZfny9d6",
  instagramUrl: "https://www.instagram.com/starashiyana_prefab/",
  linkedinUrl: "https://www.linkedin.com/company/starashiyana-prefab-llp/",
  facebookUrl: "",
  twitterUrl: "",
} as const;

export type ConnectCard = typeof connectCard;
