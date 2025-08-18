export const zones = [
  { id: "a", name: "Zone A", letter: "A", color: "a" },
  { id: "b", name: "Zone B", letter: "B", color: "b" },
  { id: "c", name: "Zone C", letter: "C", color: "c" },
  { id: "d", name: "Zone D", letter: "D", color: "d" },
  { id: "e", name: "Zone E", letter: "E", color: "e" },
  { id: "f", name: "Zone F", letter: "F", color: "f" },
];

export const stalls = [
  {
    id: "1",
    title: "Faculty of Engineering",
    organization: "University of Sri Jayawardanapura",
    zone: "A",
    stallNumber: "77",
    image: "/src/assets/exhibition-hall.jpg",
    description: "Explore cutting-edge engineering research and innovations from our leading faculty members."
  },
  {
    id: "2",
    title: "Faculty of Engineering and Sciences",
    organization: "University of Sri Jayawardanapura",
    zone: "A",
    stallNumber: "08",
    image: "/src/assets/exhibition-hall.jpg",
    description: "Discover interdisciplinary research combining engineering principles with scientific methodologies."
  },
  {
    id: "3",
    title: "Innovation Showcase",
    organization: "Technology Institute",
    zone: "A",
    stallNumber: "01",
    image: "/src/assets/exhibition-hall.jpg",
    description: "Experience the latest technological innovations and startup projects from emerging entrepreneurs."
  },
  {
    id: "4",
    title: "Chess Club Stall",
    organization: "Thurstan College",
    zone: "A",
    stallNumber: "77",
    image: "/src/assets/exhibition-hall.jpg",
    description: "Join our chess community and participate in exciting tournaments and strategy sessions."
  },
  {
    id: "5",
    title: "Robotics Showcase and Competition",
    organization: "University of Sri Jayawardanapura",
    zone: "A",
    stallNumber: "15",
    image: "/src/assets/exhibition-hall.jpg",
    description: "Witness advanced robotics demonstrations and competitive programming showcases."
  },
  {
    id: "6",
    title: "Digital Arts Gallery",
    organization: "Creative Academy",
    zone: "B",
    stallNumber: "23",
    image: "/src/assets/exhibition-hall.jpg",
    description: "Immerse yourself in digital art installations and interactive multimedia experiences."
  },
  {
    id: "7",
    title: "Sustainable Energy Solutions",
    organization: "Green Tech Institute",
    zone: "B",
    stallNumber: "45",
    image: "/src/assets/exhibition-hall.jpg",
    description: "Learn about renewable energy technologies and sustainable engineering practices."
  },
  {
    id: "8",
    title: "AI Research Lab",
    organization: "Future Tech University",
    zone: "C",
    stallNumber: "12",
    image: "/src/assets/exhibition-hall.jpg",
    description: "Explore artificial intelligence research and machine learning applications."
  },
];

export const getStallsByZone = (zoneId: string) => {
  return stalls.filter(stall => stall.zone.toLowerCase() === zoneId.toLowerCase());
};