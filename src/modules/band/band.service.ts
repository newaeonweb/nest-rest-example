import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Band } from './interface/band.interface';
import { CreateBandDto } from './dto/create-band.dto';

@Injectable()
export class BandService {
  constructor(@InjectModel('Band') private readonly bandModel: Model<Band>) {}

  async getAll(): Promise<Band[]> {
    return await this.bandModel.find();
  }

  async getById(id: string): Promise<Band> {
    return await this.bandModel.findOne({ _id: id });
  }

  async deleteById(id: string): Promise<Band> {
    return await this.bandModel.findByIdAndRemove(id);
  }

  async updateById(id: string, band: Band): Promise<Band> {
    return await this.bandModel.findByIdAndUpdate(id, band, { new: true });
  }

  async create(createBandDto: CreateBandDto): Promise<Band> {
    const createdband = new this.bandModel(createBandDto);
    return await createdband.save();
  }
}
