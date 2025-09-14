<h2>🖥️ Backend Mastery: From Zero to Backend Hero 🔥</h2>

```
NOTE:- The "must_change.env" must require some changes;
     > remove the word "must_change.env" and change it into ".env" only
     > replace values with your own credentials inside .env file
```

<h3>📅 Day 01</h3>

> _"The journey of a thousand miles begins with one step."_

1. **Project Initialization**

   - package.json setup
   - Install Express & dotenv
     <br />

2. **Configuration**

   - Create .env file (PORT)
   - Build server (index.js)
     <br />

3. **Routing & Server**
   - Define GET routes (/, /login, /signup)
   - Start server

---

<h3>📅 Day 02</h3>

> _"Code is like humor. When you have to explain it, it’s bad."_

1. **API Fundamentals**

   - What is an API
   - Role in frontend-backend communication
     <br />

2. **Working with APIs in React**

   - Fetch vs Axios comparison
   - Axios GET request with then() & catch()
   - Best practices (useEffect, useState, error handling)
     <br />

3. **Handling CORS Issues**
   - What is CORS
   - Proxy setup in Vite
   - Backend solutions (cors package, headers)

---

<h3>📅 Day 03</h3>

> _"Structure your data before you build — clean models lead to clean code."_

1. **Data Modeling Basics**

   - Object modeling purpose
   - Benefits of early planning
     <br />

2. **Introduction to Mongoose**

   - What is Mongoose
   - Schemas and models
     <br />

3. **Project Structure & Naming Conventions**

   - `models/` folder setup
   - File naming patterns
     <br />

4. **Schema Definition Essentials**

   - Field types and rules
   - Common validations (required, unique, min, etc.)
   - Timestamps for created/updated tracking
   - Model Relationships: Using `ref` for associations

---

<h3>📅 Day 04</h3>

> _"Learning to write programs stretches your mind, and helps you think better."_

1. **Data Modeling Practice**

   - E-Commerce Store Schema Design
   - Hospital Management System Schema Design
     <br />

2. **Exploring Mongoose Concepts**

   - Review: `models/ecommerce/`
   - Review: `models/hospital_management/`

---

<h3>📅 Day 05 </h3>

> _"A well-structured project is the foundation of professional software development."_

1. **UI/UX Design & DB Planning Phase**

   - Design all screens using tools like Figma
   - Collect data points for DB
   - Create data modeling diagram (with tools like Eraser.io)
     <br />

2. **Project Initialization & Structuring**

   - Initialize `package.json` with `npm init`
   - Setup common folders: `src`, `public`, `controllers`, `routes`, etc.
   - Create essential files: `.env`, `.gitignore`, `README.md`, etc.
     <br />

3. **Development Tools Setup**

   - Install `nodemon` for auto-restart
   - Install `prettier` for consistent formatting
     <br />

4. **Files Configuration**

   - Use online generator to create `.gitignore` for Node.js
   - Add `.prettierrc` and `.prettierignore` files
   - Update `package.json` for modules and scripts

---

<h3>📅 Day 06</h3>

> _"Build software the way real teams do – step by step, piece by piece."_

1. **MongoDB Atlas**

   - Create account, project, cluster
   - Save URI in `.env`
     <br />

2. **DB Connection**

   - Two connection approaches:
     Direct connect in `index.js` (less modular)
     Use `src/db/connection.js`
   - Best Practices: Use `async/await` + `try/catch`
     <br />

3. **Import Rules**

   - Load `dotenv` at top of entry file
   - Add `.js` extension to imports
   - Keep secrets in `.env`
   - Keep `index.js` clean

---

<h3>📅 Day 07 </h3>

> _"Building real-world back-end architecture step by step."_

1. **Express App Setup (`app.js`)**

   - Middlewares: `cors`, `cookieParser`, `express.json`, etc.
     <br />

2. **Server Initialization (`index.js`)**

   - DB connection, server start, and error handling
     <br />

3. **Utility Modules (`utils/`)**

   - `asyncHandler.js` – async error wrapper
   - `ApiError.js` – custom error class
   - `ApiResponse.js` – consistent success responses

---

<h3>📅 Day 08</h3>

> _"Professional backend development through real-world modeling techniques."_

1. **Model Structure & Setup**

   - Created `user.model.js` and `video.model.js` using Mongoose
   - Used ObjectId references, timestamps, and schema validation  
     <br />

2. **User Model & Authentication**

   - Defined user fields
   - Password hashing with `bcrypt` using Mongoose pre-save middleware
   - Custom methods for authentication:
     - Password verification (`bcrypt`)
     - JWT generation (`jsonwebtoken`) for access & refresh tokens
   - Stored secrets and token expiry settings in `.env`
     <br />

3. **Video Model & Pagination**

   - Defined video fields
   - Linked each video to its owner (User)
   - Added pagination support using `mongoose-aggregate-paginate-v2`

---

<h3>📅 Day 09</h3>

> _"Code is the bridge between imagination and reality; every bug you fix is a step forward."_

1. **Cloudinary Setup**

   - Creating an account and adding credentials in `.env`
   - Installing npm package `cloudinary` and configure
   - Functions to upload files and handle errors
     <br />

2. **Multer Setup**

   - Installing npm package `multer`
   - Define multer as middleware
   - Multer uses for temporary file storage, and works with Cloudinary

---

<h3>📅 Day 10</h3>

> _"The web speaks in protocols — learn their language to unlock endless possibilities."_

1.  **HTTP Basics**

    - Overview
    - HTTP vs HTTPS
    - Client-Server Model
    - URL, URI, URN
      <br />

2.  **HTTP Headers**

    - Purpose and importance
    - Types: Request, Response, Representation, Payload
    - Key headers: Authorization, Content-Type, CORS
      <br />

3.  **HTTP Methods**

    - Main verbs: GET, POST, PUT, PATCH, DELETE
    - Others: HEAD, OPTIONS, TRACE
      <br />

4.  **HTTP Status Codes**

    - Categories: 1xx to 5xx
    - Common codes: 200, 201, 400, 401, 403, 404, 500
