import { Test, TestingModule } from '@nestjs/testing';
import { BandController } from './band.controller';
import { BandService } from './band.service';
import { BandModule } from './band.module';
import { MongooseModule } from '@nestjs/mongoose';

describe('Band Controller', () => {
  let controller: BandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BandModule, MongooseModule.forRoot('mongodb://localhost/nest')],
      controllers: [BandController],
      providers: [BandService],
    }).compile();

    controller = module.get<BandController>(BandController);
  });

  fit('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
