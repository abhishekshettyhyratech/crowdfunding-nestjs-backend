import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import config from '../config/keys'
import { JwtStrategy } from './gaurds/jwt.gaurd';

@Module({
  imports:[MongooseModule.forFeature([{
    name:'User',schema:UserSchema
  }]),
  JwtModule.register({
    secret:config.JWT_SEC,
    signOptions:{
      algorithm:'HS512',
      expiresIn:'1d'
    }
  }),
  PassportModule.register({
defaultStrategy:'jwt'
  })
],
  controllers: [UserController],
  providers: [UserService,JwtStrategy]
})
export class UserModule {}
