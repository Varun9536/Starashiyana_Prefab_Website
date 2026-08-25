export type SectorGroup = {
  title: string;
  items: string[];
};

export const sectors: SectorGroup[] = [
  {
    title: "Industrial",
    items: [
      "Warehouses",
      "Industrial Sheds",
      "Factory Buildings",
      "Cold Storage Buildings",
      "Clean Rooms",
      "Poultry Sheds",
      "Industrial Enclosures",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Airport Terminal Buildings",
      "Aircraft Hangars",
      "Metro Stations",
      "Railway Sheds",
      "Foot Over Bridges",
      "Shopping Complexes",
      "Petrol Pump Stations",
    ],
  },
  {
    title: "Construction",
    items: ["Site Offices", "Staff Accommodations", "Canteen Buildings", "Toilet Blocks", "Guard Rooms"],
  },
  {
    title: "Institutional",
    items: ["School Buildings", "Hospitals", "Hostel Buildings", "Laboratories", "Exhibition Halls", "Office Buildings"],
  },
];
