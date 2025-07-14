export interface Location {
    id: string;
    name: string;
    description: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    floor: number;
    building: string;
    capacity: number;
    currentOccupancy: number;
    image: string;
  }
  
  export const locations: Location[] = [
    {
      id: 'main-auditorium',
      name: 'Main Auditorium',
      description: 'The largest venue at Thurstan College, equipped with state-of-the-art audio-visual systems.',
      coordinates: {
        latitude: 6.9031,
        longitude: 79.8622,
      },
      floor: 1,
      building: 'Main Building',
      capacity: 300,
      currentOccupancy: 245,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800',
    },
    {
      id: 'tech-hall',
      name: 'Technology Hall',
      description: 'A modern space dedicated to technology exhibitions and demonstrations.',
      coordinates: {
        latitude: 6.9033,
        longitude: 79.8624,
      },
      floor: 2,
      building: 'Science Complex',
      capacity: 150,
      currentOccupancy: 108,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800',
    },
    {
      id: 'arts-pavilion',
      name: 'Arts Pavilion',
      description: 'A creative space designed for art exhibitions and performances.',
      coordinates: {
        latitude: 6.9035,
        longitude: 79.8620,
      },
      floor: 1,
      building: 'Arts Wing',
      capacity: 200,
      currentOccupancy: 130,
      image: 'https://images.unsplash.com/photo-1594388898357-0c8b1c19bcd9?q=80&w=800',
    },
    {
      id: 'science-lab-3',
      name: 'Science Lab 3',
      description: 'Advanced laboratory equipped for scientific demonstrations and workshops.',
      coordinates: {
        latitude: 6.9032,
        longitude: 79.8625,
      },
      floor: 3,
      building: 'Science Complex',
      capacity: 50,
      currentOccupancy: 45,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800',
    },
    {
      id: 'open-theater',
      name: 'Open Air Theater',
      description: 'An outdoor venue perfect for performances and large gatherings.',
      coordinates: {
        latitude: 6.9037,
        longitude: 79.8621,
      },
      floor: 0,
      building: 'Campus Grounds',
      capacity: 250,
      currentOccupancy: 195,
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800',
    },
    {
      id: 'math-dept',
      name: 'Mathematics Department',
      description: 'Home to mathematical exhibitions and problem-solving challenges.',
      coordinates: {
        latitude: 6.9034,
        longitude: 79.8623,
      },
      floor: 2,
      building: 'Academic Block',
      capacity: 100,
      currentOccupancy: 60,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800',
    },
    {
      id: 'eng-block',
      name: 'Engineering Block',
      description: 'Showcasing engineering innovations and projects.',
      coordinates: {
        latitude: 6.9036,
        longitude: 79.8626,
      },
      floor: 1,
      building: 'Engineering Wing',
      capacity: 180,
      currentOccupancy: 99,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800',
    },
    {
      id: 'library-hall',
      name: 'Library Hall',
      description: 'A quiet space for literary discussions and presentations.',
      coordinates: {
        latitude: 6.9033,
        longitude: 79.8621,
      },
      floor: 2,
      building: 'Library Building',
      capacity: 120,
      currentOccupancy: 84,
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800',
    },
    {
      id: 'sports-complex',
      name: 'Sports Complex',
      description: 'Modern facilities for sports demonstrations and activities.',
      coordinates: {
        latitude: 6.9038,
        longitude: 79.8624,
      },
      floor: 1,
      building: 'Sports Wing',
      capacity: 150,
      currentOccupancy: 102,
      image: 'https://images.unsplash.com/photo-1470779027507-60dc54858c9f?q=80&w=800',
    },
    {
      id: 'comp-lab-2',
      name: 'Computer Lab 2',
      description: 'Advanced computing facility for workshops and competitions.',
      coordinates: {
        latitude: 6.9034,
        longitude: 79.8625,
      },
      floor: 3,
      building: 'IT Block',
      capacity: 80,
      currentOccupancy: 60,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800',
    },
    {
      id: 'science-block',
      name: 'Science Block',
      description: 'Home to various scientific exhibitions and demonstrations.',
      coordinates: {
        latitude: 6.9032,
        longitude: 79.8623,
      },
      floor: 1,
      building: 'Science Complex',
      capacity: 160,
      currentOccupancy: 99,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800',
    },
  ];
  
  export const getLocationById = (id: string): Location | undefined => {
    return locations.find(location => location.id === id);
  };
  
  export const getLocationsByBuilding = (building: string): Location[] => {
    return locations.filter(location => location.building === building);
  };
  
  export const getLocationsByFloor = (floor: number): Location[] => {
    return locations.filter(location => location.floor === floor);
  };
  
  export const getHighOccupancyLocations = (threshold = 80): Location[] => {
    return locations.filter(
      location => (location.currentOccupancy / location.capacity) * 100 >= threshold
    );
  };
  
  export const getLowOccupancyLocations = (threshold = 30): Location[] => {
    return locations.filter(
      location => (location.currentOccupancy / location.capacity) * 100 <= threshold
    );
  };