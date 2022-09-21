import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import config from './config/keys'
@Module({
  imports: [ItemsModule,MongooseModule.forRoot(config.MONGO_URL), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
