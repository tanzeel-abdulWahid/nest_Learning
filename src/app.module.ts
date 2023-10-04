import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController], //registering the controller in the app routing mechanism 
})
export class AppModule { }
