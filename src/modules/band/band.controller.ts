import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { Band } from './interface/band.interface';
import { BandService } from './band.service';
import { ApiResponse, ApiUseTags, ApiOkResponse } from '@nestjs/swagger';
import { BandDto } from './dto/band.dto';

@ApiUseTags('band')
@Controller('band')
export class BandController {
  constructor(private readonly bandService: BandService) {}

  @Get()
  @ApiOkResponse({ description: 'OK.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAll(): Promise<Band[]> {
    return this.bandService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Band> {
    return this.bandService.getById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<Band> {
    return this.bandService.deleteById(id);
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() band: BandDto): Promise<Band> {
    return this.bandService.updateById(id, band);
  }

  @Post()
  create(@Body() band: BandDto): Promise<Band> {
    return this.bandService.create(band);
  }
}
