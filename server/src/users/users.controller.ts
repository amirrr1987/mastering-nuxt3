import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUsersController } from './interfaces/users.controller.interface';
import {
  UserCreateOneRequestDto,
  UserCreateOneResponseDto,
  UserFindAllResponseDto,
  UserFindByIdRequestIdParamDto,
  UserFindByIdResponseDto,
  UserUpdateByIdRequestIdParamDto,
  UserUpdateByIdRequestDto,
  UserUpdateByIdResponseDto,
  UserDeleteByIdRequestIdParamDto,
  UserDeleteByIdResponseDto,
} from './dto';

@Controller('users')
export class UsersController implements IUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body() dto: UserCreateOneRequestDto,
  ): Promise<UserCreateOneResponseDto> {
    return this.usersService.create(dto);
  }

  @Get()
  findAll(): Promise<UserFindAllResponseDto> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(
    @Param('id', ParseIntPipe) id: UserFindByIdRequestIdParamDto,
  ): Promise<UserFindByIdResponseDto> {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  updateById(
    @Param('id', ParseIntPipe) id: UserUpdateByIdRequestIdParamDto,
    @Body() dto: UserUpdateByIdRequestDto,
  ): Promise<UserUpdateByIdResponseDto> {
    return this.usersService.updateById(id, dto);
  }

  @Delete(':id')
  deleteById(
    @Param('id', ParseIntPipe) id: UserDeleteByIdRequestIdParamDto,
  ): Promise<UserDeleteByIdResponseDto> {
    return this.usersService.deleteById(id);
  }
}
