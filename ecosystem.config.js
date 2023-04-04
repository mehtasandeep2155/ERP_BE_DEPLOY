module.exports = {
  apps: [
    {
      name: 'user',
      script: 'dist/apps/user/main.js',
    },
    {
      name: 'company',
      script: 'dist/apps/company/main.js',
    },
    {
      name: 'product',
      script: 'dist/apps/product/main.js',
    },
    {
      name: 'inventory',
      script: 'dist/apps/inventory/main.js',
    },
    {
      name: 'customer',
      script: 'dist/apps/customer/main.js',
    },
  ],
};
