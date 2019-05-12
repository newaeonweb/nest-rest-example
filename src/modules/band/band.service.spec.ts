import { Test, TestingModule } from '@nestjs/testing';
import { BandService } from './band.service';
import { BandController } from './band.controller';
import { BandModule } from './band.module';
import { MongooseModule } from '@nestjs/mongoose';

describe('BandService', () => {
  let service: BandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BandModule, MongooseModule.forRoot('mongodb://localhost/nest')],
      controllers: [BandController],
      providers: [BandService],
    }).compile();

    service = module.get<BandService>(BandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
