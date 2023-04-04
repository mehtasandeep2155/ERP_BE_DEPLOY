import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { CompanyTypeMap } from '../../shared/crud-service/models/mapType';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { CompanyDto } from '../dto/company.dto';
export declare class CompanyService extends CrudService<Prisma.CompanyDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, CompanyTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCompany(): Promise<(import(".prisma/client").Company & {
        sub_company: import(".prisma/client").Sub_company[];
    })[]>;
    getCompanyById(id: string): Promise<import(".prisma/client").Company & {
        sub_company: import(".prisma/client").Sub_company[];
    }>;
    createCompany(dto: CompanyDto): Promise<import(".prisma/client").Company & {
        sub_company: import(".prisma/client").Sub_company[];
    }>;
    updateCompany(id: string, dto: CompanyDto): Promise<import(".prisma/client").Company & {
        sub_company: import(".prisma/client").Sub_company[];
    }>;
}
