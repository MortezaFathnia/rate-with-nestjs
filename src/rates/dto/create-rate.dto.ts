export class CreateRateDto {
  readonly rate: { energy: number; time: number; transaction: number };
  readonly cdr: {
    meterStart: number;
    timestampStart: string;
    meterStop: number;
    timestampStop: string;
  };
}
