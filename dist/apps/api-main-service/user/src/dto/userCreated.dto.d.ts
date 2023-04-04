import { ModuleName } from '@prisma/client';
import { ModuleTypeAccess, Role } from '../../../shared/entity/types';
export declare class ControlsArray {
    name: ModuleName;
    controls: Array<ModuleTypeAccess>;
}
export declare class UserCreatedDto {
    email: string;
    moduleAccess: ControlsArray[];
    role: Role;
    companyName: string;
    verifyUser: boolean;
}
