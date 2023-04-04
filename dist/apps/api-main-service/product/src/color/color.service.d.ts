import { Prisma } from '@prisma/client';
import { CrudService } from '../../../shared/crud-service/crud.service';
import { ColorTypeMap } from '../../../shared/crud-service/models/mapType';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { ColorDto } from './dto/color.dto';
export declare class ColorService extends CrudService<Prisma.ColorDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined>, ColorTypeMap> {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateColor(id: string, data: ColorDto): Promise<import(".prisma/client").Color>;
}
