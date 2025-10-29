
export interface SnowflakeOptions {
  name: string;
  numArms: number;
  fontSize: number;
  armLength: number;
  tiltAngle: number;
  joinGap: number;
  fontFamily: string;
  textColor: string;
}

export interface GoogleFont {
  name: string;
  value: string;
  category: 'display' | 'serif' | 'sans-serif' | 'handwriting';
}
