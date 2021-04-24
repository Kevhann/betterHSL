export type Route = {
  walkDistance: number;
  duration: number;
  legs: Leg[];
};

export type Mode = 'WALK' | 'BUS' | 'RAIL' | 'SUBWAY';

export type PointName = string | 'Origin';

export type Leg = {
  legGeometry: legGeometry;
  mode: Mode;
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

export type Color = 'gray' | 'green' | 'red' | 'lightblue' | 'blue' | 'orange';
export type TrailLeg = { color: Color; decodedTrail: LatLong[]; active: boolean };
export type Trail = TrailLeg[];

export type TimeOption = 'NOW' | 'LEAVE_AT' | 'ARRIVE_BY';
