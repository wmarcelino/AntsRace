export type TAnt = {
  name: string;
  length: number;
  color: string;
  weight: number;
  odd?: number;
};

export type ViewProps = {
  loading: boolean;
  error?: string;
  data: TAnt[];

  handleStartRace: () => void;
  handleGetAnts: () => void;
};
