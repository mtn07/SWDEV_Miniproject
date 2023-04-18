# Base image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY frontend/package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY frontend/ .

# Build the Vue.js project
RUN npm run build

# Set the base image for the container
FROM nginx:alpine

# Copy the build files from the first image to the nginx server
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
