import * as mongoose from "mongoose";

export const ItemsSchema=new mongoose.Schema({
name:String,
desc:String,
qty:Number,
},
{timestamps:true})