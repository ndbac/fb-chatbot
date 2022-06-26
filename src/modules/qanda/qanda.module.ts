import { Module } from '@nestjs/common';
import { QAndACoreModule } from './qanda.core.module';
import { QAndAController } from './controllers/qanda.controller';
import { QAndAService } from './providers/qanda.service';

@Module({
  imports: [QAndACoreModule],
  providers: [QAndAService],
  controllers: [QAndAController],
})
export class QAndAModule {}
