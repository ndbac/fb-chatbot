import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionName } from 'src/shared/types';
import { QAndADocument } from './qanda.model';
import { QAndARepository } from './qanda.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CollectionName.QANDA,
        schema: QAndADocument.schema,
      },
    ]),
  ],
  providers: [QAndARepository],
  exports: [QAndARepository],
})
export class QAndACoreModule {}
