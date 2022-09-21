import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from './dto/auth-user.dto';
@Injectable()
export class UserService {


  constructor(@InjectModel('User') private readonly user:Model<User>,private jwtService: JwtService){}

  async create(createUserDto: CreateUserDto):Promise<User> {
    const newuser=new this.user(createUserDto);
    return await newuser.save();
  }

  async login(authUserDto:AuthUserDto):Promise<Object>{
  const newuser= await this.user.findOne(authUserDto)
 if(!newuser) throw new UnauthorizedException('Creditional Incorrect')
console.log("new",newuser)
const accessToken=this.signUser(newuser.id,newuser.email, 'user')
  return {newuser,accessToken};
  }

  signUser(userId: String, email: String, type: String) {
    return this.jwtService.sign({
      id: userId,
      email,
      role: type,
    });
  }

  
  async findAll():Promise<User[]> {
    return await this.user.find(); 
  }

  async findOne(id: string):Promise<User> {
    return await this.user.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
