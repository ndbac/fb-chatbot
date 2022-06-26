import { Injectable } from '@nestjs/common';
import { QAndARepository } from '../qanda.repository';
import { CreateQAndADto } from '../dto/qanda.dto';

@Injectable()
export class QAndAService {
  constructor(private readonly qandaRepo: QAndARepository) {}

  async createQAndA(data: CreateQAndADto) {
    const qanda = await this.qandaRepo.create({ ...data });
    return qanda;
  }
}
