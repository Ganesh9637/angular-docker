# Step 1: Use Node.js image to build the Angular app
FROM public.ecr.aws/docker/library/node:20 AS build

WORKDIR /app

# Step 2: Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 3: Copy the Angular app source code and build it
COPY . . 
RUN npm run build -- --configuration=production

# Step 4: Use Nginx to serve the built Angular app
FROM public.ecr.aws/nginx/nginx:alpine

# Copy the built Angular app to Nginx's public folder
COPY --from=build /app/dist/unit/browser /usr/share/nginx/html

# Expose port 80 (Nginx default port)
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]