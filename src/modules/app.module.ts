import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DBRootModule } from './adapters/db/db-root.module';
import { HealthModule } from './health/health.module';
import { QAndAModule } from './qanda/qanda.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DBRootModule.forMongo(),
    HealthModule,
    QAndAModule,
  ],
})
export class AppModule {}
