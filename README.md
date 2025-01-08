# Server-Side

This is the server-side component of the application. It is built using Node.js, Express, and MongoDB. The project is designed to handle API requests, manage uploads, and provide data for the client-side.

#### Structure

```plaintext
server/
├── app.js                   # Main entry point for the server
├── package-lock.json        # Auto-generated file for npm dependencies
├── package.json             # Contains project metadata and dependencies
├── controllers/             # Contains business logic for API endpoints
│   ├── api.js               # API controller
├── models/                  # Database models
│   ├── posts.js             # Schema for posts
├── routes/                  # API routing logic
│   ├── routes.js            # Application routes
├── uploads/                 # Directory for file uploads
│   ├── uploaded-pics        # Uploaded images
└── ...
```

## Dependencies

The following dependencies are used in this project:

- **[cors](https://www.npmjs.com/package/cors)**: Enable Cross-Origin Resource Sharing.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Manage environment variables.
- **[express](https://www.npmjs.com/package/express)**: Web application framework for Node.js, providing the foundation for building web applications and APIs.
- **[mongodb](https://www.npmjs.com/package/mongodb)**: MongoDB driver for Node.js.
- **[mongoose](https://www.npmjs.com/package/mongoose)**: MongoDB object modeling for Node.js.
- **[multer](https://www.npmjs.com/package/multer)**: Middleware for handling `multipart/form-data` for file uploads.

## Installation

Follow these steps to set up the server locally:

1. Clone the repository:

```bash
git clone <repository_url>
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and configure the following variables:

```plaintext
PORT=<port_number>
MONGO_URI=<mongodb_connection_string>
```

4. Start the server:

```bash
npm start
```

## Features

- **API Endpoints**: Manage and serve data using RESTful APIs.
- **File Uploads**: Handle image uploads using Multer.
- **Database Integration**: Connect to MongoDB using Mongoose.
- **Environment Configuration**: Configurable using dotenv.

## Development

To run the server in development mode with hot-reloading:

```bash
npm run dev
```

(Ensure you have nodemon installed globally or as a dev dependency.)
