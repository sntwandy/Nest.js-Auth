import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalSrategy } from './local.strategy';

@Module({
  imports: [UsersService, PassportModule],
  providers: [AuthService, LocalSrategy],
})
export class AuthModule {}
