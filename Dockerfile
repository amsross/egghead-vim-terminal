FROM amsross/egghead:latest

WORKDIR /code

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY ./*.js ./
COPY ./*.txt ./
