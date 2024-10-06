const apiprice = "https://api.spoonacular.com";
const MEALPLANLEN = 15;
const apikey = environ.env.API_KEY;
const token = require('jsonwebtoken');
require('dotenv').config();  // Load environment variables
const express = require('express');
const connectDB = require('./Server.js');  // Import the MongoDB connection function
const authRoutes = require('./Auth/Authorize.js');  // Import authentication routes
const authURL = "http://localhost:" + environ.env.PORT + "/Authorize";

const app = express();

// connect to MongoDB
connectDB();
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const apiplaninfo = {usern: "Placeholder", hash: "Placeholder:"};


//sign up async
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();  // Prevent the default form submission

  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),  //sends email and password to account db
      catch (error) {
        console.error('Error signing up:', error);
      }
    });




  //sign in async
    signinForm.addEventListener('submit', async (e) => {
      e.preventDefault();  
    
      const email = document.getElementById('signin-email').value;
      const password = document.getElementById('signin-password').value;
    
      try {
        const response = await fetch(`${API_URL}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),  //sends email and password to account db
          catch (error) {
            console.error('Error signing up:', error);
          }
        });

        const data = await response.json();
        if (response.ok) {
          // Store the token in localStorage
          localStorage.setItem('token', data.token);
        }


function getDate() {
  const dateObj = new Date();
  const month   = dateObj.getUTCMonth() + 1; // months from 1-12
  const day     = dateObj.getUTCDate();
  const year    = dateObj.getUTCFullYear();
  const newDate = year + "-" + month + "-" + day;
return newDate;
}