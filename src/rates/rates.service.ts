import { Injectable } from '@nestjs/common';
import { Rate } from './Interfaces/rate.interface';
import { Model } from 'mongoose';
import * as moment from 'moment';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RatesService {
  constructor(@InjectModel('Rate') private readonly rateModel: Model<Rate>) {}

  async create(rate: Rate): Promise<Rate> {
    const energy = (rate.cdr.meterStop - rate.cdr.meterStart) / 1000;
    const start = moment(rate.cdr.timestampStop);
    const stop = moment(rate.cdr.timestampStart);
    const duration = moment.duration(start.diff(stop)).asHours();
    const costEnergy = (energy * rate.rate.energy).toFixed(3);
    const costTime = (duration * rate.rate.time).toFixed(3);
    const costOverall =
      parseFloat(costEnergy) + parseFloat(costTime) + rate.rate.transaction;

    const cost = {
      overall: costOverall.toFixed(2),
      components: {
        energy: costEnergy,
        time: costTime,
        transaction: rate.rate.transaction,
      },
    };
    const newRate = new this.rateModel(cost);
    console.log(123, newRate);
    return newRate.save();
  }
}
