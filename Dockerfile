# Use the official Node.js 18 image as a base image
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the container
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the Next.js app's source code
COPY . .

# Build the Next.js app
RUN pnpm run build

# Expose the port on which the Next.js app will run
EXPOSE 3000

# Define the environment variable for production
ENV NODE_ENV=production

# Start the Next.js app
CMD ["pnpm", "start"]
