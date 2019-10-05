FROM node
# Update packages and install dependency packages for services
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

ENV INSTALL_PATH /aircnc_app
ENV MONGO_URL mongodb://localhost:27017/aircnc_dev

# Prepare app directory
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

# Install dependencies
RUN npm install
COPY . .

ADD . $INSTALL_PATH

CMD [ "node", "server.js" ]