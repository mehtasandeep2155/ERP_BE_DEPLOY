import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { ProductVariantTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ProductVariantDto } from './dto/productvariant.dto';
export declare class ProductvariantService extends CrudService<Prisma.Product_variantDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, ProductVariantTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getVariant(): Promise<(import(".prisma/client").Product_variant & {
        weightUom: import(".prisma/client").Uom;
    })[]>;
    getVariantById(id: string): Promise<import(".prisma/client").Product_variant>;
    createProductVariant(dto: ProductVariantDto): Promise<import(".prisma/client").Product_variant>;
    updateProductVariant(id: string, dto: ProductVariantDto): Promise<import(".prisma/client").Product_variant>;
}
