import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/mongoose/base.repository';
import { CollectionName } from 'src/shared/types';
import { QAndADocument } from './qanda.model';

@Injectable()
export class QAndARepository
  extends BaseRepository<QAndADocument>
  implements OnApplicationBootstrap
{
  constructor(
    @InjectModel(CollectionName.QANDA)
    model: Model<QAndADocument>,
  ) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}
