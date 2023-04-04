import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { ProductDimensionTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ProductDimensionDto } from './dto/product-dimension.dto';
export declare class ProductdimensionService extends CrudService<Prisma.Product_dimensionDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, ProductDimensionTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDimension(): Promise<(import(".prisma/client").Product_dimension & {
        uom: import(".prisma/client").Uom;
    })[]>;
    createDimensions(dto: ProductDimensionDto): Promise<import(".prisma/client").Product_dimension>;
    updateDimensions(id: string, dto: ProductDimensionDto): Promise<import(".prisma/client").Product_dimension>;
}
