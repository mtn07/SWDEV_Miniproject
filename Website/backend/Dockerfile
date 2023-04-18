# Base image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY backend/package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY backend/ .

# Expose port 3000 for the container
EXPOSE 3000

# Start the backend application
CMD ["npm", "start"]
