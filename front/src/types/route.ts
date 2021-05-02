export type Route = {
  walkDistance: number;
  duration: number;
  legs: Leg[];
};

export type TransportMode = 'WALK' | 'BUS' | 'RAIL' | 'SUBWAY';

export type PointName = string | 'Origin';

export type Leg = {
  legGeometry: legGeometry;
  mode: TransportMode;
  startTime: number;
  endTime: number;
  trip: Trip;
  from: From;
  to: To;
  distance: number;
};
export type legGeometry = {
  points: string;
};

export type From = {
  lat: number;
  lon: number;
  name: PointName;
  stop: Stop;
};

export type To = {
  lat: number;
  lon: number;
  name: PointName;
};

export type Trip = {
  route: {
    shortName: string;
    longName: string;
  };
  tripHeadsign: string;
  stops: { name: null };
} | null;

export type Stop = {
  code: string;
  name: string;
} | null;

export type LatLong = [number, number];

// All application colors should go here
// TODO: Find some nice colors
export enum Colors {
  Green = 'green',
  Red = 'red',
  Gray = 'gray',
  LightBlue = 'lightblue',
  Blue = 'blue',
  SubwayOrange = '#ff6319',
  BusBlue = '#007ac9',
  RailPurple = '#8c4799'
}
// Colors that map to a transportation method go here

export const colorMap: Record<TransportMode, Colors> = {
  WALK: Colors.Gray,
  BUS: Colors.BusBlue,
  RAIL: Colors.RailPurple,
  SUBWAY: Colors.SubwayOrange
};

// export type Color = 'gray' | 'green' | 'red' | 'lightblue' | 'blue' | 'orange';
export type TrailLeg = { color: Colors; decodedTrail: LatLong[]; active: boolean };
export type Trail = TrailLeg[];

export type TimeOption = 'NOW' | 'LEAVE_AT' | 'ARRIVE_BY';

export type LayerName = 'venue' | 'stop' | 'address' | 'street';

export type AutocompleteResult = { layer: LayerName; title: string; coordinates: LatLong };
