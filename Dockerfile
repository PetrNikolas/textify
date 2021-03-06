FROM node:8.10.0-alpine

# Set a working directory
WORKDIR /usr/src

COPY ./dist/package.json .
COPY ./dist/yarn.lock .

# Install Node.js dependencies
RUN yarn install --production --no-progress

# Copy application files
COPY ./dist .

# Run the container under "node" user by default
USER node

# Set NODE_ENV env variable to "production" for faster expressjs
ENV NODE_ENV production

CMD [ "node", "server.js" ]
