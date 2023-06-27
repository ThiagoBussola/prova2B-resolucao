import { Injectable } from '@nestjs/common';
import { NewUserDto } from './dto/new-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


export type UserType = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: NewUserDto) {
    createUserDto.password = await this.userHash(createUserDto.password)
    this.userModel.create(createUserDto);
  }

  find() {
    const users = this.userModel.find().select("-password");
    return users;
  }

  findOneById(id: string) {
    const userById = this.userModel.findOne({_id: id}).select("-password");
    return userById;
  }

  findUserByEmail(email: string) { //Rota para ser utilizada com o login
    const userByEmail = this.userModel.findOne({email: email});
    return userByEmail;
  }

  updateById(id: string, updateUserDto: UpdateUserDto) {
    const updatedUserById = this.userModel.findByIdAndUpdate(
      id,
      {
        name: updateUserDto.name,
        lastName: updateUserDto.lastName,
        email: updateUserDto.email,
        password: updateUserDto.password
      },
      { new: true },
    ).select("-password");

    return updatedUserById;
  }

  removeById(id: string) {
    const deletedUser = this.userModel.findByIdAndDelete(id);
    return deletedUser;
  }

  private async userHash(password) {
    const saltOrRounds = 15;
    const hashedPass = await bcrypt.hash(password, saltOrRounds);
    return hashedPass
  }
}
