export interface Rate {
  rate: { energy: number; time: number; transaction: number };
  cdr: {
    meterStart: number;
    timestampStart: string;
    meterStop: number;
    timestampStop: string;
  };
}
