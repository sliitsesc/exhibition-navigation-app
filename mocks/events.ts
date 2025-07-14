export type EventType = 'lecture' | 'showcase' | 'workshop' | 'competition' | 'performance';

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface Society {
  id: string;
  name: string;
  logo?: string;
}

export interface Event {
  id: string;
  name: string;
  type: EventType;
  description: string;
  society: Society;
  location: string;
  locationId: string;
  startTime: string;
  endTime: string;
  currentLoad: number; // percentage
  capacity: number;
  tags: Tag[];
  likes: number;
  comments: number;
  rank: number;
  isLive: boolean;
  image: string;
  isRecurring: boolean;
  recurringInterval?: number; // in minutes
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  banner: string;
  description: string;
}

export const tags: Tag[] = [
  { id: '1', name: 'Science', color: '#6366F1' },
  { id: '2', name: 'Technology', color: '#8B5CF6' },
  { id: '3', name: 'Engineering', color: '#EC4899' },
  { id: '4', name: 'Arts', color: '#F97316' },
  { id: '5', name: 'Mathematics', color: '#10B981' },
  { id: '6', name: 'Literature', color: '#FBBF24' },
  { id: '7', name: 'Sports', color: '#EF4444' },
  { id: '8', name: 'Music', color: '#06B6D4' },
  { id: '9', name: 'Drama', color: '#8B5CF6' },
  { id: '10', name: 'Robotics', color: '#6366F1' },
];

export const societies: Society[] = [
  { id: '1', name: 'Science Society' },
  { id: '2', name: 'IT Club' },
  { id: '3', name: 'Engineering Society' },
  { id: '4', name: 'Arts Club' },
  { id: '5', name: 'Mathematics Society' },
  { id: '6', name: 'Literary Association' },
  { id: '7', name: 'Sports Club' },
  { id: '8', name: 'Music Society' },
  { id: '9', name: 'Drama Club' },
  { id: '10', name: 'Robotics Club' },
];

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250',
    banner: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
    description: 'Leading technology solutions provider',
  },
  {
    id: '2',
    name: 'EduLearn',
    logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=250',
    banner: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800',
    description: 'Innovative educational platform',
  },
  {
    id: '3',
    name: 'Future Labs',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=250',
    banner: 'https://images.unsplash.com/photo-1581092921461-7031e8fbc66c?q=80&w=800',
    description: 'Research and development for tomorrow',
  },
  {
    id: '4',
    name: 'Global Connect',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=250',
    banner: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800',
    description: 'Connecting the world through technology',
  },
];

export const events: Event[] = [
  {
    id: '1',
    name: 'AI and Machine Learning: The Future',
    type: 'lecture',
    description: 'An insightful lecture on the latest advancements in AI and machine learning technologies and their impact on our future.',
    society: societies[1],
    location: 'Main Auditorium',
    locationId: 'main-auditorium',
    startTime: '2025-08-01T10:00:00',
    endTime: '2025-08-01T11:30:00',
    currentLoad: 85,
    capacity: 300,
    tags: [tags[0], tags[1]],
    likes: 245,
    comments: 57,
    rank: 4.8,
    isLive: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '2',
    name: 'Robotics Showcase',
    type: 'showcase',
    description: 'Experience cutting-edge robotics innovations created by our talented students. Interactive demonstrations and hands-on activities.',
    society: societies[9],
    location: 'Technology Hall',
    locationId: 'tech-hall',
    startTime: '2025-08-01T09:00:00',
    endTime: '2025-08-01T17:00:00',
    currentLoad: 72,
    capacity: 150,
    tags: [tags[1], tags[2], tags[9]],
    likes: 189,
    comments: 42,
    rank: 4.7,
    isLive: true,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '3',
    name: 'Creative Arts Exhibition',
    type: 'showcase',
    description: 'A stunning display of artwork, sculptures, and creative installations by our talented arts students.',
    society: societies[3],
    location: 'Arts Pavilion',
    locationId: 'arts-pavilion',
    startTime: '2025-08-01T09:00:00',
    endTime: '2025-08-03T17:00:00',
    currentLoad: 65,
    capacity: 200,
    tags: [tags[3], tags[8]],
    likes: 210,
    comments: 38,
    rank: 4.6,
    isLive: true,
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '4',
    name: 'Quantum Computing Workshop',
    type: 'workshop',
    description: 'An interactive workshop exploring the principles of quantum computing and its potential applications.',
    society: societies[0],
    location: 'Science Lab 3',
    locationId: 'science-lab-3',
    startTime: '2025-08-01T13:00:00',
    endTime: '2025-08-01T15:00:00',
    currentLoad: 90,
    capacity: 50,
    tags: [tags[0], tags[1], tags[4]],
    likes: 156,
    comments: 29,
    rank: 4.9,
    isLive: false,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800',
    isRecurring: true,
    recurringInterval: 180, // 3 hours
  },
  {
    id: '5',
    name: 'Drama Performance: "The Future We Create"',
    type: 'performance',
    description: 'An original play exploring themes of technology, humanity, and the future, performed by our award-winning drama club.',
    society: societies[8],
    location: 'Open Air Theater',
    locationId: 'open-theater',
    startTime: '2025-08-01T18:00:00',
    endTime: '2025-08-01T20:00:00',
    currentLoad: 78,
    capacity: 250,
    tags: [tags[3], tags[8]],
    likes: 178,
    comments: 45,
    rank: 4.7,
    isLive: false,
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=800',
    isRecurring: true,
    recurringInterval: 1440, // daily
  },
  {
    id: '6',
    name: 'Mathematical Puzzles Challenge',
    type: 'competition',
    description: 'Test your problem-solving skills with challenging mathematical puzzles and compete for exciting prizes.',
    society: societies[4],
    location: 'Mathematics Department',
    locationId: 'math-dept',
    startTime: '2025-08-02T10:00:00',
    endTime: '2025-08-02T12:00:00',
    currentLoad: 60,
    capacity: 100,
    tags: [tags[4]],
    likes: 132,
    comments: 28,
    rank: 4.5,
    isLive: false,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '7',
    name: 'Sustainable Engineering Projects',
    type: 'showcase',
    description: 'Innovative engineering solutions addressing environmental challenges, designed and built by our engineering students.',
    society: societies[2],
    location: 'Engineering Block',
    locationId: 'eng-block',
    startTime: '2025-08-01T09:00:00',
    endTime: '2025-08-03T17:00:00',
    currentLoad: 55,
    capacity: 180,
    tags: [tags[2], tags[0]],
    likes: 167,
    comments: 34,
    rank: 4.6,
    isLive: true,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '8',
    name: 'Literary Symposium',
    type: 'lecture',
    description: 'Distinguished authors and poets discuss contemporary literature and its influence on society.',
    society: societies[5],
    location: 'Library Hall',
    locationId: 'library-hall',
    startTime: '2025-08-02T14:00:00',
    endTime: '2025-08-02T16:00:00',
    currentLoad: 70,
    capacity: 120,
    tags: [tags[5]],
    likes: 145,
    comments: 32,
    rank: 4.5,
    isLive: false,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '9',
    name: 'Sports Science Exhibition',
    type: 'showcase',
    description: 'Explore the science behind athletic performance, training methodologies, and sports technology.',
    society: societies[6],
    location: 'Sports Complex',
    locationId: 'sports-complex',
    startTime: '2025-08-01T09:00:00',
    endTime: '2025-08-03T17:00:00',
    currentLoad: 68,
    capacity: 150,
    tags: [tags[6], tags[0]],
    likes: 156,
    comments: 29,
    rank: 4.6,
    isLive: true,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '10',
    name: 'Musical Extravaganza',
    type: 'performance',
    description: 'A spectacular musical performance showcasing the talents of our music society members.',
    society: societies[7],
    location: 'Main Auditorium',
    locationId: 'main-auditorium',
    startTime: '2025-08-02T18:00:00',
    endTime: '2025-08-02T20:00:00',
    currentLoad: 82,
    capacity: 300,
    tags: [tags[7]],
    likes: 198,
    comments: 47,
    rank: 4.8,
    isLive: false,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '11',
    name: 'Cybersecurity Challenges',
    type: 'competition',
    description: 'Test your hacking and defense skills in this exciting cybersecurity competition with real-world scenarios.',
    society: societies[1],
    location: 'Computer Lab 2',
    locationId: 'comp-lab-2',
    startTime: '2025-08-03T10:00:00',
    endTime: '2025-08-03T14:00:00',
    currentLoad: 75,
    capacity: 80,
    tags: [tags[1], tags[0]],
    likes: 167,
    comments: 38,
    rank: 4.7,
    isLive: false,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800',
    isRecurring: false,
  },
  {
    id: '12',
    name: 'Environmental Science Projects',
    type: 'showcase',
    description: 'Innovative research projects addressing environmental challenges and promoting sustainability.',
    society: societies[0],
    location: 'Science Block',
    locationId: 'science-block',
    startTime: '2025-08-01T09:00:00',
    endTime: '2025-08-03T17:00:00',
    currentLoad: 62,
    capacity: 160,
    tags: [tags[0], tags[2]],
    likes: 154,
    comments: 31,
    rank: 4.6,
    isLive: true,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800',
    isRecurring: false,
  },
];

export const getLiveEvents = () => {
  return events.filter(event => event.isLive);
};

export const getUpcomingEvents = () => {
  return events.filter(event => !event.isLive);
};

export const getEventsByType = (type: EventType) => {
  return events.filter(event => event.type === type);
};

export const getEventsByTag = (tagId: string) => {
  return events.filter(event => event.tags.some(tag => tag.id === tagId));
};

export const getEventsBySociety = (societyId: string) => {
  return events.filter(event => event.society.id === societyId);
};