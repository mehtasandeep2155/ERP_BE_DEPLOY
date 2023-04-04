import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { ProductTypeMap } from '../../shared/crud-service/models/mapType';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductService extends CrudService<Prisma.ProductDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, ProductTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getProduct(): Promise<(import(".prisma/client").Product & {
        user: import(".prisma/client").User;
        rate: import(".prisma/client").Rate & {
            color: import(".prisma/client").Color;
            type: import(".prisma/client").Product_type;
            dimension: import(".prisma/client").Product_dimension;
            variant: import(".prisma/client").Product_variant;
        };
        weightUom: import(".prisma/client").Uom;
    })[]>;
    getProductById(id: string): Promise<import(".prisma/client").Product & {
        user: import(".prisma/client").User;
        rate: import(".prisma/client").Rate & {
            color: import(".prisma/client").Color;
            type: import(".prisma/client").Product_type;
            dimension: import(".prisma/client").Product_dimension & {
                uom: import(".prisma/client").Uom;
            };
            variant: import(".prisma/client").Product_variant;
        };
        weightUom: import(".prisma/client").Uom;
    }>;
    createProduct(dto: ProductDto): Promise<import(".prisma/client").Product & {
        user: import(".prisma/client").User;
        rate: import(".prisma/client").Rate & {
            color: import(".prisma/client").Color;
            type: import(".prisma/client").Product_type;
            dimension: import(".prisma/client").Product_dimension;
            variant: import(".prisma/client").Product_variant;
        };
        weightUom: import(".prisma/client").Uom;
    }>;
    updateProduct(id: string, dto: ProductDto): Promise<import(".prisma/client").Product & {
        user: import(".prisma/client").User;
        rate: import(".prisma/client").Rate & {
            color: import(".prisma/client").Color;
            type: import(".prisma/client").Product_type;
            dimension: import(".prisma/client").Product_dimension;
            variant: import(".prisma/client").Product_variant;
        };
        weightUom: import(".prisma/client").Uom;
    }>;
}
