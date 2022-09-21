import { Controller,Get,Post,Body,Param,Put,Req,Res, Delete } from '@nestjs/common';
import { CreateItems } from './dto/create.dto';
import { Items } from './interface/items.interface';
import { ItemsService } from './items.service';
import { Request,Response } from 'express';
import { HttpCode } from '@nestjs/common';
@Controller('items')
export class ItemsController {

    constructor(private itemsService: ItemsService){
    }

    @Get()
    findAll():Promise<Items[]>{
        return this.itemsService.findData();
    }


    @Post()
    createItem(@Body() createItem:CreateItems):Promise<Items>{
      return this.itemsService.create(createItem);
    }

    @Put(':id')
    updateItem(@Body() updateItem:CreateItems,@Param('id') id):Promise<Items>{
     return this.itemsService.update(id,updateItem);
    }

    @Get(':id')
    findById(@Param('id') id):Promise<Items>{
    return this.itemsService.findById(id);
    }
 
    @Delete(':id')
    delete(@Param('id') id):string{
      this.itemsService.delete(id);
      return 'Deleted successfully';
    }

    
    


}
