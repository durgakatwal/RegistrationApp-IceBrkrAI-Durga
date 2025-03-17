# Use a base image with Node.js
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install Expo CLI globally
RUN npm install -g expo-cli

# Set environment variable to disable Ngrok prompts
ENV EXPO_NO_TUNNEL_PROMPT=1

# Copy the rest of the project files
COPY . .

# Expose the Metro Bundler port (adjust if needed)
EXPOSE 8081

# Start the Expo app in LAN mode (avoiding Ngrok)
CMD ["npx", "expo", "start", "--lan"]
