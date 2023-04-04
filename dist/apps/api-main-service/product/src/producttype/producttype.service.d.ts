import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { ProductCategoryTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ProductTypeDto } from './dto/product-type.dto';
export declare class ProducttypeService extends CrudService<Prisma.Product_typeDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, ProductCategoryTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProductType(dto: ProductTypeDto): Promise<import(".prisma/client").Product_type>;
    updateType(id: string, dto: ProductTypeDto): Promise<import(".prisma/client").Product_type>;
}
