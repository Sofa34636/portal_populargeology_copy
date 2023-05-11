# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine

# Set the working directory to /app inside the container
WORKDIR /frontend

# Copy app files
COPY . .
COPY ./src ./frontend/src
COPY ./.babelrc ./frontend/.babelrc
COPY ./index.d.ts ./frontend/index.d.ts
COPY ./package-lock.json ./frontend/package-lock.json
COPY ./package.json ./frontend/package.json
COPY ./tsconfig.json ./frontend/tsconfig.json
COPY ./webpack.config.js ./frontend/webpack.config.js

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm i

# Build the app
#RUN npm run build

# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000

# Start the app
#CMD [ "npx", "serve", "build" ]
CMD [ "npm", "run", "serve" ]


