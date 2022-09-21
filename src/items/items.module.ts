import { Module } from '@nestjs/common';
import { ItemsSchema } from './schemas/items.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
@Module({
    imports:[MongooseModule.forFeature([{name:'Item' , schema:ItemsSchema}])],
    controllers:[ItemsController],
    providers:[ItemsService]
})
export class ItemsModule {}
