FROM node:10.24-buster AS builder

WORKDIR /home/app

# NPM v7
RUN npm install --global npm
COPY package.json /home/app/
COPY package-lock.json /home/app/
COPY packages/library/package.json /home/app/packages/library/
COPY packages/products/package.json /home/app/packages/products/
COPY packages/collections_page/package.json /home/app/packages/collections_page/
COPY packages/styles_page/package.json /home/app/packages/styles_page/
COPY packages/purchase_orders_page/package.json /home/app/packages/purchase_orders_page/
COPY packages/style_card/package.json /home/app/packages/style_card/
COPY packages/shell/package.json /home/app/packages/shell/
RUN npm ci

COPY . .

RUN npm run single:build

FROM nginx:1.19-alpine
COPY --from=builder /home/app/build /usr/share/nginx/html
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
