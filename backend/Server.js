// File: server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL connection setup
const pool = new Pool({
  user: "postgres",
  host: 'localhost',
  database: 'signupdb',
  password: '12345',
  port: 5432,
});

// Helper function for validation
const validateSignUpData = (data) => {
  const { name, username, email, dob, countryCode, phoneNumber, password } = data;
  const errors = [];

  if (!name || !username || !email || !dob || !countryCode || !phoneNumber || !password) {
    errors.push('All fields are required.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('Invalid email format.');
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    errors.push('Phone number must be 10 digits.');
  }

  if (password.length < 7 || !/\d/.test(password) || !/[a-zA-Z]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
    errors.push('Password must contain at least 7 characters, including numbers, letters, and special characters.');
  }

  return errors;
};

// Signup route
app.post('/signup', async (req, res) => {
  const formData = req.body;
  const validationErrors = validateSignUpData(formData);

  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  const { name, username, email, dob, countryCode, phoneNumber, password } = formData;

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (name, username, email, dob, country_code, phone_number, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, username, email, dob, countryCode, phoneNumber, hashedPassword]
    );

    res.status(200).json('Signup successful');
  } catch (error) {
    console.error(error);
    if (error.code === '23505') {
      return res.status(400).json({ errors: ['Email or phone number already exists.'] });
    }
    res.status(500).json('Server error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
