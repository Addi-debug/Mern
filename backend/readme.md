# Project Setup Guide

## 1. Install dependencies

Run this command in your project folder to install required packages:

```bash
npm install



## 2. Install express

npm install express


## 3. Create file named index

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

