export type TOddStatus = 'not_yet' | 'in_progress' | 'calculated';

export type TAnt = {
  name: string;
  length: number;
  color: string;
  weight: number;
  odd: number;
  oddFormatted: string;

  oddStatus: TOddStatus;
};

export type ViewProps = {
  loading: boolean;
  error?: string;
  data: TAnt[];
  raceStatusFormatted: string;
  raceStatus: TOddStatus;
  handleStartRace: () => void;
  handleGetAnts: () => void;
};

export type CardProps = {
  antColor: string;
};
