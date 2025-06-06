# 1. Use an official Node.js base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy only package files first to leverage Docker cache
COPY package*.json ./

# 4. Install dependencies
RUN npm install --legacy-peer-deps


# 5. Copy the rest of the application
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose port 3000
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]
