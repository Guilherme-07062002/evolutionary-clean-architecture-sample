import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PamonhaModule } from './modules/pamonha/pamonha.module';

@Module({
  imports: [
    UsersModule,
    PamonhaModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }