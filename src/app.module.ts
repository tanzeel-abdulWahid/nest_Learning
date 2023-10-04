import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';

@Module({
  controllers: [UsersController, AlbumsController], //registering the controller in the app routing mechanism 
})
export class AppModule { }
