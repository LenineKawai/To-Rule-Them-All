# Use Node.js as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/to-rule

# Copy package.json and package-lock.json to the container
# COPY ./package*.json ./

# Install project dependencies
RUN npm install -g next

# Copy the entire project to the container
COPY . .

# Expose the default Next.js development port
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]

# CMD [ "tail", "-f", "/dev/null" ]


# COMANDES TO BUILD AND RUN :

    # docker build -t getting-started .
    # docker run -dp 127.0.0.1:3000:3000 getting-started