import { Injectable } from '@nestjs/common';
import { Band } from './interface/band.interface';

@Injectable()
export class BandService {

  getAll(): Band[] {
    return [
      {id: '1', name: 'Metallica', country: 'USA'},
      {id: '2', name: 'Iron Maiden', country: 'England'},
    ];
  }

  getById(id: string): Band {
    return {
      id: `${id}`,
      name: 'Metallica',
      country: 'USA',
    };
  }

  deleteById(id: string): Band {
    return {
      id: `${id}`,
      name: 'Metallica',
      country: 'USA',
    };
  }

  updateById(id: string, band: Band): Band {
    return {
      id: `${id}`,
      name: 'Metallica',
      country: 'USA',
    };
  }

  create(band: Band): Band {
    return {
      id: '3',
      name: 'Sepultura',
      country: 'Brasil',
    };
  }
}
