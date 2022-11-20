FROM node:18-slim
COPY . .
RUN  yarn install
RUN yarn build
ENTRYPOINT [ "yarn", "start" ]