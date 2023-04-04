FROM public.ecr.aws/lambda/nodejs:14

RUN npm install

COPY . .

RUN npx prisma migrate dev

RUN npx prisma db seed

RUN npm run build

CMD ["dist/apps/api-main-service/main.handler"]