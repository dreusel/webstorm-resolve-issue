const axios = require('axios');
const mongodb = require('mongodb');
const { MongoClient } = mongodb;

axios.getAdapter();

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
