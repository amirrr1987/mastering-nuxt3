import {
  DtoRoleCreateOneRequestBody,
  DtoRoleCreateOneResponseBody,
  DtoRoleFindAllResponseBody,
  DtoRoleFindByIdRequestParam,
  DtoRoleFindByIdResponseBody,
  DtoRoleUpdateByIdRequestParam,
  DtoRoleUpdateByIdRequestBody,
  DtoRoleUpdateByIdResponseBody,
  DtoRoleRemoveByIdRequestParam,
  DtoRoleRemoveByIdResponseBody,
} from '../dto';

export interface IRolesService {
  create(
    dto: DtoRoleCreateOneRequestBody,
  ): Promise<DtoRoleCreateOneResponseBody>;
  findAll(): Promise<DtoRoleFindAllResponseBody>;
  findById(
    id: DtoRoleFindByIdRequestParam,
  ): Promise<DtoRoleFindByIdResponseBody>;
  updateById(
    id: DtoRoleUpdateByIdRequestParam,
    dto: DtoRoleUpdateByIdRequestBody,
  ): Promise<DtoRoleUpdateByIdResponseBody>;
  deleteById(
    id: DtoRoleRemoveByIdRequestParam,
  ): Promise<DtoRoleRemoveByIdResponseBody>;
}
