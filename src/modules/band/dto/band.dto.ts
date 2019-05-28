import { ApiModelProperty } from '@nestjs/swagger';

export class BandDto {

  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  country: string;
}
