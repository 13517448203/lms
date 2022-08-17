import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Permission } from './entities/permission.entity';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private readonly permissionsRepository: Repository<Permission>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const roleList = [];
    for (let i = 0; i < createRoleDto.permission.length; i++) {
      const roleOne = this.getPermissionsById({
        id: createRoleDto.permission[i],
      });
      roleList.push(roleOne);
    }

    const role = new CreateRoleDto();
    role.roleName = createRoleDto.roleName;
    role.permission = roleList;
    return await this.roleRepository.save(role);
  }

  async getPermissionsById(id) {
    return await this.permissionsRepository.find({ where: { id: id } });
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
