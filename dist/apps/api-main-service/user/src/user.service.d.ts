import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { UserTypeMap } from '../../shared/crud-service/models/mapType';
import { UserCreatedDto } from './dto/userCreated.dto';
import { PrismaService } from '../../shared/prisma/prisma.service';
export declare class UserService extends CrudService<Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, UserTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    verifyUser(dto: UserCreatedDto): Promise<import(".prisma/client").User & {
        modules: import(".prisma/client").Module[];
        company: import(".prisma/client").Company & {
            sub_company: import(".prisma/client").Sub_company[];
        };
    }>;
    getUser(): Promise<(import(".prisma/client").User & {
        modules: import(".prisma/client").Module[];
        company: import(".prisma/client").Company & {
            sub_company: import(".prisma/client").Sub_company[];
        };
    })[]>;
}
