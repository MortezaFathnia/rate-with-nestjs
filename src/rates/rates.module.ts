import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RatesController } from './rates.controller';
import { RatesService } from './rates.service';
import { RateSchema } from './schemas/rate.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rate', schema: RateSchema }])],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
