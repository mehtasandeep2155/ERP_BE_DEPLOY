import { Prisma } from '@prisma/client';
import { CrudService } from 'apps/shared/crud-service/crud.service';
import { CustomerTypeMap } from 'apps/shared/crud-service/models/mapType';
import { PrismaService } from 'apps/shared/prisma/prisma.service';
import { CustomerDto } from './dto/customer.dto';
export declare class CustomerService extends CrudService<Prisma.CustomerDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, CustomerTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCustomer(): Promise<(import(".prisma/client").Customer & {
        purchase_order: import(".prisma/client").Purchase_order[];
    })[]>;
    getCustomerById(id: string): Promise<import(".prisma/client").Customer>;
    createCustomer(dto: CustomerDto): Promise<import(".prisma/client").Customer>;
    updateCustomer(id: string, dto: CustomerDto): Promise<import(".prisma/client").Customer>;
}
