const axios = require('axios');
const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const express = require('express');
const mongoose = require('mongoose');
const lodash = require('lodash');

axios.getAdapter();


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
