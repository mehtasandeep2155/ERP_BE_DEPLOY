import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // create user
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(
    'Test@123',
    salt,
  );

  const password1 = await bcrypt.hash(
    'Test@123',
    salt,
  );

  const user = await prisma.user.upsert({
    where: {
      email: 'test@test.com',
    },
    create: {
      email: 'test@test.com',
      password: password,
      role: 'Admin',
    },
    update: {
      email: 'test@test.com',
      password: password,
      role: 'Admin',
    },
  });

  const user1 = await prisma.user.upsert({
    where: {
      email: 'test1@test.com',
    },
    create: {
      email: 'test1@test.com',
      password: password1,
      role: 'BranchUser',
      verified: false,
    },
    update: {
      email: 'test1@test.com',
      password: password1,
      role: 'BranchUser',
      verified: false,
    },
  });

  //   verify-user
  await prisma.module.createMany({
    data: [
      {
        name: 'User',
        controls: ['Read', 'Edit', 'Delete'],
        userId: user1.id,
      },
      {
        name: 'Products',
        controls: ['Read', 'Edit'],
        userId: user1.id,
      },
      {
        name: 'PurchaseOrders',
        controls: ['Read'],
        userId: user1.id,
      },
    ],
  });

  const sub1 = await prisma.sub_company.upsert({
    where: {
      name: 'subCompany1',
    },
    create: {
      name: 'subCompany1',
    },
    update: {
      name: 'subCompany1',
    },
  });

  const sub2 = await prisma.sub_company.upsert({
    where: {
      name: 'subCompany2',
    },
    create: {
      name: 'subCompany2',
    },
    update: {
      name: 'subCompany2',
    },
  });

  const sub3 = await prisma.sub_company.upsert({
    where: {
      name: 'subCompany3',
    },
    create: {
      name: 'subCompany3',
    },
    update: {
      name: 'subCompany3',
    },
  });

  //   company
  await prisma.company.upsert({
    where: {
      name: 'Company1',
    },
    create: {
      name: 'Company1',
      sub_company: {
        connect: [
          {
            id: sub1.id,
          },
          {
            id: sub2.id,
          },
        ],
      },
      user: {
        connect: {
          email: 'test@test.com',
        },
      },
    },
    update: {
      name: 'Company1',
      sub_company: {
        connect: [
          {
            id: sub1.id,
          },
          {
            id: sub2.id,
          },
        ],
      },
      user: {
        connect: {
          email: 'test@test.com',
        },
      },
    },
  });

  // uom
  const weightUom = await prisma.uom.upsert({
    where: {
      type: 'kilogram',
    },
    create: {
      type: 'kilogram',
    },
    update: {
      type: 'kilogram',
    },
  });

  const heightUom = await prisma.uom.upsert({
    where: {
      type: 'feet',
    },
    create: {
      type: 'feet',
    },
    update: {
      type: 'feet',
    },
  });

  //   product-variant
  await prisma.product_variant.upsert({
    where: {
      sectionNumber: 3301,
    },
    create: {
      sectionName: 'Single Partition',
      sectionNumber: 3301,
      weight: 40,
      weightUomId: weightUom.id,
      height: 12,
      width: 10,
      outerDiameter: 12,
      thickness: 1.1,
    },
    update: {
      sectionName: 'Single Partition',
      sectionNumber: 3301,
      weight: 40,
      weightUomId: weightUom.id,
      height: 12,
      width: 10,
      outerDiameter: 12,
      thickness: 1.1,
    },
  });

  await prisma.product_variant.upsert({
    where: {
      sectionNumber: 3302,
    },
    create: {
      sectionName: 'Double Partition',
      sectionNumber: 3302,
      weight: 30,
      weightUomId: weightUom.id,
      height: 10,
      width: 12,
      outerDiameter: 4,
      thickness: 1.5,
    },
    update: {
      sectionName: 'Double Partition',
      sectionNumber: 3302,
      weight: 30,
      weightUomId: weightUom.id,
      height: 10,
      width: 12,
      outerDiameter: 4,
      thickness: 1.5,
    },
  });

  // product-type
  const type1 =
    await prisma.product_type.findFirst({
      where: {
        AND: [
          {
            type: 'Anodized',
          },
          {
            subtype: 'Plain',
          },
        ],
      },
    });
  const type2 =
    await prisma.product_type.findFirst({
      where: {
        AND: [
          {
            type: 'Anodized',
          },
          {
            subtype: 'Normal',
          },
        ],
      },
    });
  const type3 =
    await prisma.product_type.findFirst({
      where: {
        AND: [
          {
            type: 'Powdered',
          },
          {
            subtype: 'Premium',
          },
        ],
      },
    });
  const type4 =
    await prisma.product_type.findFirst({
      where: {
        AND: [
          {
            type: 'Powdered',
          },
          {
            subtype: 'Standard',
          },
        ],
      },
    });

  if (!type1)
    var typeData1 =
      await prisma.product_type.create({
        data: {
          type: 'Anodized',
          subtype: 'Plain',
        },
      });

  if (!type2)
    var typeData2 =
      await prisma.product_type.create({
        data: {
          type: 'Anodized',
          subtype: 'Normal',
        },
      });

  if (!type3)
    var typeData3 =
      await prisma.product_type.create({
        data: {
          type: 'Powdered',
          subtype: 'Premium',
        },
      });

  if (!type4) {
    var typeData4 =
      await prisma.product_type.create({
        data: {
          type: 'Powdered',
          subtype: 'Standard',
        },
      });
  }

  // product-dimension
  const dimension1 =
    await prisma.product_dimension.upsert({
      where: {
        height: 10,
      },
      create: {
        height: 10,
        uomId: heightUom.id,
      },
      update: {
        height: 10,
        uomId: heightUom.id,
      },
    });
  const dimension2 =
    await prisma.product_dimension.upsert({
      where: {
        height: 12,
      },
      create: {
        height: 12,
        uomId: heightUom.id,
      },
      update: {
        height: 12,
        uomId: heightUom.id,
      },
    });
  const dimension3 =
    await prisma.product_dimension.upsert({
      where: {
        height: 15,
      },
      create: {
        height: 15,
        uomId: heightUom.id,
      },
      update: {
        height: 15,
        uomId: heightUom.id,
      },
    });

  const typeId1 =
    type1 && type1.id.length > 0
      ? type1?.id
      : typeData1?.id;

  const typeId2 =
    type4 && type4.id.length > 0
      ? type4?.id
      : typeData4?.id;

  // rate
  const rate1 = await prisma.rate.create({
    data: {
      variant: {
        connect: {
          sectionNumber: 3301,
        },
      },
      color: {
        connectOrCreate: {
          where: {
            color: 'silver',
          },
          create: {
            color: 'silver',
          },
        },
      },
      dimension: {
        connect: {
          id: dimension3.id,
        },
      },
      type: {
        connect: {
          id: typeId1,
        },
      },
      rate: 50,
    },
  });

  const rate2 = await prisma.rate.create({
    data: {
      variant: {
        connect: {
          sectionNumber: 3302,
        },
      },
      color: {
        connectOrCreate: {
          where: {
            color: 'gray',
          },
          create: {
            color: 'gray',
          },
        },
      },
      dimension: {
        connect: {
          id: dimension2.id,
        },
      },
      type: {
        connect: {
          id: typeId2,
        },
      },
      rate: 60,
    },
  });

  // product
  await prisma.product.create({
    data: {
      count: 5,
      weight: 50,
      weightUomId: weightUom.id,
      userId: user.id,
      rateId: rate1.id,
    },
  });

  await prisma.product.create({
    data: {
      count: 2,
      weight: 30,
      weightUomId: weightUom.id,
      userId: user.id,
      rateId: rate2.id,
    },
  });

  // stock
  await prisma.stock.upsert({
    where: {
      type: 'raw',
    },
    create: {
      count: 10,
      weight: 50,
      weightUomId: weightUom.id,
      type: 'raw',
    },
    update: {
      count: 10,
      weight: 50,
      weightUomId: weightUom.id,
      type: 'raw',
    },
  });

  await prisma.stock.upsert({
    where: {
      type: 'garbage',
    },
    create: {
      count: 10,
      weight: 50,
      weightUomId: weightUom.id,
      type: 'garbage',
    },
    update: {
      count: 10,
      weight: 50,
      weightUomId: weightUom.id,
      type: 'garbage',
    },
  });

  await prisma.stock.upsert({
    where: {
      type: 'finished',
    },
    create: {
      count: 10,
      weight: 50,
      weightUomId: weightUom.id,
      type: 'finished',
    },
    update: {
      count: 10,
      weight: 50,
      weightUomId: weightUom.id,
      type: 'finished',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
