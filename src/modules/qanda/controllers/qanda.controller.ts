import {
  Controller,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { QAndAService } from '../providers/qanda.service';
import { QANDA_ENDPOINT_CONFIG, EQAndAOperationId } from './endpoint-config';
import { EndpointConfig } from 'src/decorators/endpoint-config.decorator';
import { CreateQAndADto } from '../dto/qanda.dto';

@Controller('qanda')
@ApiTags('qanda')
@UsePipes(ValidationPipe)
export class QAndAController {
  constructor(private readonly qandaService: QAndAService) {}

  @Post()
  @EndpointConfig(QANDA_ENDPOINT_CONFIG[EQAndAOperationId.CREATE_QANDA])
  async createQAndA(@Body() data: CreateQAndADto) {
    return this.qandaService.createQAndA(data);
  }
}
