FROM node:14.16-buster AS builder

WORKDIR /home/app

# Yarn
COPY package.json /home/app/
COPY yarn.lock /home/app/
COPY packages/ds/package.json /home/app/packages/ds/
COPY packages/products/package.json /home/app/packages/products/
COPY packages/collections_page/package.json /home/app/packages/collections_page/
COPY packages/styles_page/package.json /home/app/packages/styles_page/
COPY packages/purchase_orders_page/package.json /home/app/packages/purchase_orders_page/
COPY packages/style_card/package.json /home/app/packages/style_card/
COPY packages/shell/package.json /home/app/packages/shell/
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn single:build

FROM nginx:1.19-alpine
COPY --from=builder /home/app/build /usr/share/nginx/html
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
