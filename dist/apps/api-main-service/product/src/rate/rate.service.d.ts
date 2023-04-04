import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { RateTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { RateDto } from './dto/rate.dto';
export declare class RateService extends CrudService<Prisma.RateDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, RateTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getRate(): Promise<(import(".prisma/client").Rate & {
        color: import(".prisma/client").Color;
        type: import(".prisma/client").Product_type;
        dimension: import(".prisma/client").Product_dimension;
        variant: import(".prisma/client").Product_variant;
    })[]>;
    getRateById(id: string): Promise<void>;
    createRate(dto: RateDto): Promise<import(".prisma/client").Rate & {
        color: import(".prisma/client").Color;
        type: import(".prisma/client").Product_type;
        dimension: import(".prisma/client").Product_dimension;
        variant: import(".prisma/client").Product_variant;
    }>;
    updateRate(id: string, dto: RateDto): Promise<import(".prisma/client").Rate & {
        color: import(".prisma/client").Color;
        type: import(".prisma/client").Product_type;
        dimension: import(".prisma/client").Product_dimension;
        variant: import(".prisma/client").Product_variant;
    }>;
}
