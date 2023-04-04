import { ApiMainServiceService } from "./api-main-service.service";
import { UserService } from "apps/user/src/user.service";
import { AuthService } from "apps/user/src/auth/auth.service";
import { AuthDto, AuthSignInDto, PasswordDto, ResetPassDto } from "apps/user/src/auth/dto/auth.dto";
import { UserCreatedDto } from "apps/user/src/dto/userCreated.dto";
import { SubcompanyService } from "apps/company/src/subcompany/subcompany.service";
import { CompanyService } from "apps/company/src/company.service";
import { SubCompanyDto } from "apps/company/src/subcompany/dto/subcompany.dto";
import { CompanyDto } from "apps/company/dto/company.dto";
import { ColorService } from "apps/product/src/color/color.service";
import { ColorDto } from "apps/product/src/color/dto/color.dto";
import { ProductDto } from "apps/product/src/dto/product.dto";
import { ProductDimensionDto } from "apps/product/src/productdimension/dto/product-dimension.dto";
import { ProductTypeDto } from "apps/product/src/producttype/dto/product-type.dto";
import { ProductVariantDto } from "apps/product/src/productvariant/dto/productvariant.dto";
import { PurchaseOrderDto, VerifyPurchaseOrderDto } from "apps/product/src/purchaseorder/dto/purchaseorder.dto";
import { RateDto } from "apps/product/src/rate/dto/rate.dto";
import { UomDto } from "apps/product/src/uom/dto/uom.dto";
import { ProductdimensionService } from "apps/product/src/productdimension/productdimension.service";
import { ProductvariantService } from "apps/product/src/productvariant/productvariant.service";
import { PurchaseorderService } from "apps/product/src/purchaseorder/purchaseorder.service";
import { ProducttypeService } from "apps/product/src/producttype/producttype.service";
import { RateService } from "apps/product/src/rate/rate.service";
import { UomService } from "apps/product/src/uom/uom.service";
import { ProductService } from "apps/product/src/product.service";
import { InventoryDto } from "apps/inventory/src/dto/inventory.dto";
import { InventoryViewDto } from "apps/inventory/src/inventoryview/dto/inventoryview.dto";
import { StockDto } from "apps/inventory/src/stock/dto/stock.dto";
import { StockActionsDto } from "apps/inventory/src/stockactions/dto/stockactions.dto";
import { InventoryviewService } from "apps/inventory/src/inventoryview/inventoryview.service";
import { InventoryService } from "apps/inventory/src/inventory.service";
import { StockService } from "apps/inventory/src/stock/stock.service";
import { StockactionsService } from "apps/inventory/src/stockactions/stockactions.service";
import { CustomerDto } from "apps/customer/src/dto/customer.dto";
import { CustomerService } from "apps/customer/src/customer.service";
export declare class ApiMainServiceController {
    private readonly apiMainServiceService;
    private readonly userService;
    private readonly authService;
    private readonly subcompanyService;
    private readonly companyService;
    private readonly colorService;
    private readonly productdimensionService;
    private readonly productvariantService;
    private readonly purchaseorderService;
    private readonly producttypeService;
    private readonly rateService;
    private readonly uomService;
    private readonly productService;
    private readonly stockService;
    private readonly stockActionsService;
    private readonly inventoryviewService;
    private readonly inventoryService;
    private readonly customerService;
    constructor(apiMainServiceService: ApiMainServiceService, userService: UserService, authService: AuthService, subcompanyService: SubcompanyService, companyService: CompanyService, colorService: ColorService, productdimensionService: ProductdimensionService, productvariantService: ProductvariantService, purchaseorderService: PurchaseorderService, producttypeService: ProducttypeService, rateService: RateService, uomService: UomService, productService: ProductService, stockService: StockService, stockActionsService: StockactionsService, inventoryviewService: InventoryviewService, inventoryService: InventoryService, customerService: CustomerService);
    getHello(): object[];
    getUserApi(): Promise<(import(".prisma/client").User & {
        modules: import(".prisma/client").Module[];
        company: import(".prisma/client").Company & {
            sub_company: import(".prisma/client").Sub_company[];
        };
    })[]>;
    signup(dto: AuthDto): Promise<import(".prisma/client").User>;
    signin(dto: AuthSignInDto): Promise<{
        jwt: string;
        user: import(".prisma/client").User & {
            modules: import(".prisma/client").Module[];
            company: import(".prisma/client").Company & {
                sub_company: import(".prisma/client").Sub_company[];
            };
        };
    }>;
    forgotPassword(dto: PasswordDto): Promise<string>;
    resetPassword(dto: ResetPassDto): Promise<string>;
    verifyUser(dto: UserCreatedDto): Promise<import(".prisma/client").User & {
        modules: import(".prisma/client").Module[];
        company: import(".prisma/client").Company & {
            sub_company: import(".prisma/client").Sub_company[];
        };
    }>;
    getSubCompanies(): Promise<unknown>;
    getSubCompany(id: string): Promise<unknown>;
    createSubCompany(dto: SubCompanyDto): Promise<unknown>;
    updateSubCompany(id: string, dto: SubCompanyDto): Promise<unknown>;
    deleteSubCompany(id: string): Promise<unknown>;
    getCompanies(): Promise<(import(".prisma/client").Company & {
        sub_company: import(".prisma/client").Sub_company[];
    })[]>;
    getCompany(id: string): Promise<import(".prisma/client").Company & {
        sub_company: import(".prisma/client").Sub_company[];
    }>;
    createCompany(dto: CompanyDto): Promise<import(".prisma/client").Company & {
        sub_company: import(".prisma/client").Sub_company[];
    }>;
    updateCompany(id: string, dto: CompanyDto): Promise<import(".prisma/client").Company & {
        sub_company: import(".prisma/client").Sub_company[];
    }>;
    deleteCompany(id: string): Promise<unknown>;
    getColor(): Promise<unknown>;
    getById(id: string): Promise<unknown>;
    create(dto: ColorDto): Promise<unknown>;
    update(id: string, dto: ColorDto): Promise<import(".prisma/client").Color>;
    deleteColorById(id: string): Promise<unknown>;
    get(): Promise<(import(".prisma/client").Product_dimension & {
        uom: import(".prisma/client").Uom;
    })[]>;
    getDimensionById(id: string): Promise<unknown>;
    createProductDimensions(dto: ProductDimensionDto): Promise<import(".prisma/client").Product_dimension>;
    updateProductDimensions(id: string, dto: ProductDimensionDto): Promise<import(".prisma/client").Product_dimension>;
    deleteDimensionById(id: string): Promise<unknown>;
    getType(): Promise<unknown>;
    getTypeById(id: string): Promise<unknown>;
    createProductType(dto: ProductTypeDto): Promise<import(".prisma/client").Product_type>;
    updateType(id: string, dto: ProductTypeDto): Promise<import(".prisma/client").Product_type>;
    deleteTypeById(id: string): Promise<unknown>;
    getVariants(): Promise<(import(".prisma/client").Product_variant & {
        weightUom: import(".prisma/client").Uom;
    })[]>;
    getVariantById(id: string): Promise<import(".prisma/client").Product_variant>;
    createProductVariant(dto: ProductVariantDto): Promise<import(".prisma/client").Product_variant>;
    updateProductVariant(id: string, dto: ProductVariantDto): Promise<import(".prisma/client").Product_variant>;
    deleteProductVariant(id: string): Promise<unknown>;
    getPurchaseOrder(): Promise<(import(".prisma/client").Purchase_order & {
        products: (import(".prisma/client").Product & {
            user: import(".prisma/client").User;
            rate: import(".prisma/client").Rate & {
                color: import(".prisma/client").Color;
                type: import(".prisma/client").Product_type;
                dimension: import(".prisma/client").Product_dimension;
                variant: import(".prisma/client").Product_variant;
            };
            weightUom: import(".prisma/client").Uom;
        })[];
        customer_info: import(".prisma/client").Customer;
    })[]>;
    getPurchaseOrderById(id: string): Promise<import(".prisma/client").Purchase_order & {
        products: (import(".prisma/client").Product & {
            user: import(".prisma/client").User;
            rate: import(".prisma/client").Rate & {
                color: import(".prisma/client").Color;
                type: import(".prisma/client").Product_type;
                dimension: import(".prisma/client").Product_dimension;
                variant: import(".prisma/client").Product_variant;
            };
            weightUom: import(".prisma/client").Uom;
        })[];
        customer_info: import(".prisma/client").Customer;
    }>;
    createPurchaseOrder(dto: PurchaseOrderDto): Promise<import(".prisma/client").Purchase_order & {
        products: import(".prisma/client").Product[];
        customer_info: import(".prisma/client").Customer;
    }>;
    updatePurchaseOrder(id: string, dto: PurchaseOrderDto): Promise<import(".prisma/client").Purchase_order & {
        products: import(".prisma/client").Product[];
        customer_info: import(".prisma/client").Customer;
    }>;
    verifyPurchaseOrder(id: string, dto: VerifyPurchaseOrderDto): Promise<import(".prisma/client").Purchase_order>;
    deletePurchaseOrder(id: string): Promise<unknown>;
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
    deleteRateById(id: string): Promise<unknown>;
    getUom(): Promise<unknown>;
    getUomById(id: string): Promise<unknown>;
    createUom(dto: UomDto): Promise<unknown>;
    updateUom(id: string, dto: UomDto): Promise<import(".prisma/client").Uom>;
    deleteById(id: string): Promise<unknown>;
    getProducts(): Promise<(import(".prisma/client").Product & {
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
    deleteProduct(id: string): Promise<unknown>;
    getView(): Promise<(import(".prisma/client").Inventory_view & {
        color: import(".prisma/client").Color;
        weightUom: import(".prisma/client").Uom;
        dimension: import(".prisma/client").Product_dimension;
        variant: import(".prisma/client").Product_variant;
        coating: import(".prisma/client").Product_type;
    })[]>;
    getViewById(id: string): Promise<import(".prisma/client").Inventory_view & {
        color: import(".prisma/client").Color;
        weightUom: import(".prisma/client").Uom;
        dimension: import(".prisma/client").Product_dimension;
        variant: import(".prisma/client").Product_variant;
        coating: import(".prisma/client").Product_type;
    }>;
    createView(dto: InventoryViewDto): Promise<import(".prisma/client").Inventory_view>;
    updateView(dto: InventoryViewDto, id: string): Promise<import(".prisma/client").Inventory_view>;
    deleteView(id: string): Promise<unknown>;
    getStock(): Promise<(import(".prisma/client").Stock & {
        weightUom: import(".prisma/client").Uom;
    })[]>;
    getStockById(id: string): Promise<import(".prisma/client").Stock & {
        weightUom: import(".prisma/client").Uom;
    }>;
    createStock(dto: StockDto): Promise<import(".prisma/client").Stock>;
    updateStock(id: string, dto: StockDto): Promise<import(".prisma/client").Stock>;
    deleteStock(id: string): Promise<unknown>;
    getAction(): Promise<unknown>;
    getActionById(id: string): Promise<unknown>;
    createActions(dto: StockActionsDto): Promise<import(".prisma/client").StockActions>;
    updateActions(id: string, dto: StockActionsDto): Promise<import(".prisma/client").StockActions>;
    deleteActions(id: string): Promise<unknown>;
    getInventory(): Promise<(import(".prisma/client").Inventory & {
        inventory_view: (import(".prisma/client").Inventory_view & {
            color: import(".prisma/client").Color;
            weightUom: import(".prisma/client").Uom;
            dimension: import(".prisma/client").Product_dimension;
            variant: import(".prisma/client").Product_variant;
            coating: import(".prisma/client").Product_type;
        })[];
        rawChange_after_action: import(".prisma/client").StockActions;
        garbageChange_after_action: import(".prisma/client").StockActions;
        finishedChange_after_action: import(".prisma/client").StockActions;
        rawStock_after_action: import(".prisma/client").Stock;
        garbageStock_after_action: import(".prisma/client").Stock;
        finishedStock_after_action: import(".prisma/client").Stock;
    })[]>;
    getInventoryById(id: string): Promise<import(".prisma/client").Inventory & {
        inventory_view: (import(".prisma/client").Inventory_view & {
            color: import(".prisma/client").Color;
            weightUom: import(".prisma/client").Uom;
            dimension: import(".prisma/client").Product_dimension;
            variant: import(".prisma/client").Product_variant;
            coating: import(".prisma/client").Product_type;
        })[];
        rawChange_after_action: import(".prisma/client").StockActions;
        garbageChange_after_action: import(".prisma/client").StockActions;
        finishedChange_after_action: import(".prisma/client").StockActions;
        rawStock_after_action: import(".prisma/client").Stock;
        garbageStock_after_action: import(".prisma/client").Stock;
        finishedStock_after_action: import(".prisma/client").Stock;
    }>;
    createInventory(dto: InventoryDto): Promise<import(".prisma/client").Inventory & {
        rawChange_after_action: import(".prisma/client").StockActions;
        garbageChange_after_action: import(".prisma/client").StockActions;
        finishedChange_after_action: import(".prisma/client").StockActions;
        rawStock_after_action: import(".prisma/client").Stock;
        garbageStock_after_action: import(".prisma/client").Stock;
        finishedStock_after_action: import(".prisma/client").Stock;
    }>;
    deleteInventory(id: string): Promise<unknown>;
    getCustomer(): Promise<(import(".prisma/client").Customer & {
        purchase_order: import(".prisma/client").Purchase_order[];
    })[]>;
    getCustomerById(id: string): Promise<import(".prisma/client").Customer>;
    createCustomer(dto: CustomerDto): Promise<import(".prisma/client").Customer>;
    updateCustomer(id: string, dto: CustomerDto): Promise<import(".prisma/client").Customer>;
    deleteCustomer(id: string): Promise<unknown>;
}
