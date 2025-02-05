import { Module } from '@nestjs/common';
import { UsersModule } from "src/users/users.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';


@Module({
  imports: [
    UsersModule,
    // TypeOrmModule.forFeature([])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
