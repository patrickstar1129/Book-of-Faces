const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require('./util/FBAuth')

const { getAllPosts, postOne } = require("./handlers/posts");

const { signUpUsers, logInUsers } = require("./handlers/users");

// Post Routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOne);
// Users Routes
app.post("/signup", signUpUsers);
app.post("/login", logInUsers);
// Verify Token


// post route

// validate user input



exports.api = functions.https.onRequest(app);
