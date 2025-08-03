// 📁 File: seedLegalDocs.js
// ✅ CLI script to load all legal documents into MongoDB
require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const mongoUri = process.env.MONGO_URI;
const client = new MongoClient(mongoUri);

const loadFile = (filename) => {
  const filePath = path.join(__dirname, filename);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const run = async () => {
  try {
    const data = [
      ...loadFile('./mexausa_legal_seed.json'),
      ...loadFile('./mexausa_legal_additional_languages.json')
    ];

    await client.connect();
    const db = client.db('mexausa');
    const collection = db.collection('legalDocuments');

    await collection.deleteMany({});
    const result = await collection.insertMany(data);

    console.log(`✅ Loaded ${result.insertedCount} legal documents into MongoDB.`);
  } catch (err) {
    console.error('❌ Failed to load legal documents:', err);
  } finally {
    await client.close();
  }
};

run();
