import { Injectable } from '@nestjs/common';
import { Items } from './interface/items.interface';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
   constructor(@InjectModel('Item')  private readonly items:Model<Items>){}

    async findData():Promise<Items[]> {
    return await this.items.find();
    }

    async findById(id:string):Promise<Items> {
       return await this.items.findOne({_id:id});
    }

    async create(item:Items):Promise<Items> {
        const newitems=new this.items(item);
        return await newitems.save();
    }


    async update(id:string,item:Items):Promise<Items> {
    return this.items.findByIdAndUpdate(id,item,{new:true});
    }

    async delete(id:string):Promise<Items> {
    return this.items.findByIdAndDelete(id);
    }

   
}
