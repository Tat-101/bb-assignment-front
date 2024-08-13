# syntax=docker/dockerfile:1

# Stage 1: Build the React app
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:stable-alpine

# Copy the built React app to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
