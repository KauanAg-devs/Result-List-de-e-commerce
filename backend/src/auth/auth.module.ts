import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

const jwtModule = JwtModule.register({
  secret: process.env.JWT_SECRET || 'default-secret-key',
  signOptions: { expiresIn: '15m' },
});

@Module({
  imports: [UserModule, PassportModule, jwtModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
