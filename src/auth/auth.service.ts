import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,  private jwtService: JwtService) {}

  async signIn(emailUser: string, password: string): Promise<any> {

    const user = await this.usersService.findUserByEmail(emailUser);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    } 

    const payload = { id_user: user._id, emial_user: user.email };

    const access_token = await this.jwtService.signAsync(payload); 

    return access_token;
  }
}