import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    throw new BadRequestException({ message: 'This action adds a new user'});
  }

  findAll() {
    throw new BadRequestException({ message: `This action returns all users`});
  }

  findOne(id: number) {
    throw new BadRequestException({ message: `This action returns a #${id} user`});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    throw new BadRequestException({ message: `This action updates a #${id} user`});
  }

  remove(id: number) {
    throw new BadRequestException({ message: `This action removes a #${id} user`});
  }
}
