import { Body, Controller, Post } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { Rate } from './Interfaces/rate.interface';
import { RatesService } from './rates.service';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Post()
  create(@Body() createRateDto: CreateRateDto): Promise<Rate> {
    return this.ratesService.create(createRateDto);
  }
}
