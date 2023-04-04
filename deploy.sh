#!/bin/bash
git pull
yarn install
npx prisma migrate dev --skip-seed
yarn build
pm2 reload ecosystem.config.js
# EOF