
URL Shortener Backend
A backend URL shortener built using Node.js, Express, and MongoDB.
The application provides a REST API to generate short URLs and a public redirect route to resolve them back to the original URLs.

Features
Generate short URLs using unique 7-character codes

Store URL mappings in MongoDB

Redirect short URLs to the original destination

RESTful API design

Clean separation between API routes and public routes

Tech Stack
Node.js

Express.js

MongoDB (Atlas)

Mongoose

nanoid

dotenv

Project Structure
backend/
├── config/
│   └── db.js
├── models/
│   └── Url.js
├── routes/
│   └── urlRoutes.js
├── .env
├── index.js
├── package.json
└── package-lock.json
API Endpoints
1. Create Short URL
POST /api/url/shorten

Request Body (JSON):

{
  "originalUrl": "https://example.com"
}
Response:

{
  "shortUrl": "http://localhost:3000/Ab3xPq7"
}
2. Redirect Short URL
GET /:shortCode

Example:

http://localhost:3000/Ab3xPq7
Redirects the user to the original URL stored in the database.

How It Works
A client sends a long URL to the backend using a POST request.

The backend generates a unique short code using nanoid.

The original URL and short code are stored in MongoDB.

A short URL is returned to the client.

When the short URL is accessed in a browser, the backend looks up the short code and redirects to the original URL.

Environment Variables
Create a .env file inside the backend directory:


PORT=3000
MONGO_URI=your_mongodb_connection_string

For Begineers i would suggest to use mongodb atlas

Installation & Running Locally
git clone https://github.com/your-username/url-shortener-backend.git
cd backend
npm install
node index.js
npm install nanoid


Server will start on 
http://localhost:3000

Error Handling

Returns 400 if the original URL is missing

Returns 404 if a short code does not exist

Returns 500 for server or database errors

Possible Improvements

URL validation

Prevent duplicate URLs

Click count analytics

Authentication and user-specific URLs

Frontend interface


Use postman POST API to postman api to post the request and get 

first download the postman api app and choose post method and give this link
http://localhost:3000/api/url/shorten

and choose body and then you can give the input like this 
{
  "originalUrl": "https://facebook.com"
}

it will give you the shorturl code 
 




