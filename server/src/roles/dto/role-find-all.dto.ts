import { ResponseData } from 'src/response/response.service.interface';
import { RoleBaseDto } from './role-base.dto';

export class RoleFindAllResponseDto extends ResponseData {
  data: RoleBaseDto[];
}
