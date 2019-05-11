import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BandController } from './band.controller';
import { BandService } from './band.service';
import { BandSchema } from './schemas/band.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Band', schema: BandSchema }])],
  controllers: [BandController],
  providers: [BandService],
})
export class BandModule {}
