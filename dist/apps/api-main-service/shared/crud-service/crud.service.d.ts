import { CrudTypeMap } from './models/crudMapType';
import { Delegate } from './models/delegate';
export declare abstract class CrudService<D extends Delegate, T extends CrudTypeMap> {
    protected delegate: D;
    constructor(delegate: D);
    getDelegate(): D;
    get(): Promise<unknown>;
    getById(id: string): Promise<unknown>;
    create(data: T['create']): Promise<unknown>;
    update(id: string, data: any): Promise<unknown>;
    delete(id: string): Promise<unknown>;
}
