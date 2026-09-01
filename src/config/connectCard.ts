export type ConnectCard = {
  slug: string;
  name: string;
  designation: string;
  company: string;
  phone: string;
  whatsappPhone: string;
  email: string;
  emailSecondary: string;
  website: string;
  factoryAddress: string;
  factoryMapUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  twitterUrl: string;
};

/**
 * Details shown on the /connect digital business cards. No database: update
 * this file and redeploy when a card changes.
 */
export const connectCard = {
  slug: "",
  name: "Tanishq Premi",
  designation: "Managing Director",
  company: "Starashiyana Prefab LLP",
  phone: "+918285976527",
  whatsappPhone: "+918285976527",
  email: "premi.tanishq@gmail.com",
  emailSecondary: "starashiyana.prefab@gmail.com",
  website: "https://www.starashiyanaprefab.com/",
  factoryAddress:
    "Khewat No. 138, Khatoni No. 139, Kila No. 16, Rajpura, Near Alamgirpur, Dharuhera, District Rewari, Haryana - 123110, India",
  factoryMapUrl: "https://maps.app.goo.gl/AbTafTUvzhZfny9d6",
  instagramUrl: "https://www.instagram.com/starashiyana_prefab/",
  linkedinUrl: "https://www.linkedin.com/company/starashiyana-prefab-llp/",
  facebookUrl: "",
  twitterUrl: "",
} as const satisfies ConnectCard;

export const connectCards = {
  "harish-kumar-premi": {
    slug: "harish-kumar-premi",
    name: "Harish Kumar Premi",
    designation: "Director",
    company: "Starashiyana Prefab LLP",
    phone: "+919810292910",
    whatsappPhone: "+919810292910",
    email: "premi.starashiyana@gmail.com",
    emailSecondary: "starashiyana.prefab@gmail.com",
    website: "https://www.starashiyanaprefab.com/",
    factoryAddress:
      "Khewat No. 138, Khatoni No. 139, Kila No. 16, Rajpura, Near Alamgirpur, Dharuhera, District Rewari, Haryana - 123110, India",
    factoryMapUrl: "https://maps.app.goo.gl/AbTafTUvzhZfny9d6",
    instagramUrl: "https://www.instagram.com/starashiyana_prefab?igsi=MXZ2bjdoeHk4Zmdqag%3D%3D&utm_source=qr",
    linkedinUrl: "https://www.linkedin.com/in/starashiyana-prefab-llp-undefined-7068b8432/",
    facebookUrl: "",
    twitterUrl: "",
  },
  "tushar-premi": {
    slug: "tushar-premi",
    name: "Tushar Premi",
    designation: "Managing Director",
    company: "Starashiyana Prefab LLP",
    phone: "+919871615571",
    whatsappPhone: "+919871615571",
    email: "tushar.starashiyana@gmail.com",
    emailSecondary: "starashiyana.prefab@gmail.com",
    website: "https://www.starashiyanaprefab.com/",
    factoryAddress:
      "Khewat No. 138, Khatoni No. 139, Kila No. 16, Rajpura, Near Alamgirpur, Dharuhera, District Rewari, Haryana - 123110, India",
    factoryMapUrl: "https://maps.app.goo.gl/AbTafTUvzhZfny9d6",
    instagramUrl: "https://www.instagram.com/starashiyana_prefab?igsi=MXZ2bjdoeHk4Zmdqag%3D%3D&utm_source=qr",
    linkedinUrl: "https://www.linkedin.com/in/starashiyana-prefab-llp-undefined-7068b8432/",
    facebookUrl: "",
    twitterUrl: "",
  },
} as const satisfies Record<string, ConnectCard>;

export type ConnectCardSlug = keyof typeof connectCards;

export function getConnectCard(slug?: string): ConnectCard | undefined {
  if (!slug) return connectCard;
  return connectCards[slug as ConnectCardSlug];
}

export function getConnectCardSlugs(): ConnectCardSlug[] {
  return Object.keys(connectCards) as ConnectCardSlug[];
}
