import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Band } from './interface/band.interface';
import { BandDto } from './dto/band.dto';

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

  async updateById(id: string, band: BandDto): Promise<Band> {
    return await this.bandModel.findByIdAndUpdate(id, band, { new: true });
  }

  async create(band: BandDto): Promise<Band> {
    return await new this.bandModel(band).save();
  }
}
