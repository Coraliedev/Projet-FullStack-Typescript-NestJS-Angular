import { Injectable, NotFoundException } from '@nestjs/common';
import { ReadUserDto } from 'src/users/dto/read-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(readUserDto: ReadUserDto) {
    const foundUser = this.usersService.findOne(readUserDto.email);
    if (!foundUser) {
      return new NotFoundException();
    }
    return foundUser;
  }
}
