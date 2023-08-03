const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://sapir:sapir123@cluster0.42nsgof.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
  }
}

connectToMongoDB();

app.get('/', (req, res) => {
  res.send('Legendary Lugia');
});

app.post('/api/checkout', async (req, res) => {
  const cartItems = req.body;
  console.log('Received checkout data:', cartItems);

  const db = client.db('Cluster0'); 
  const checkoutCollection = db.collection('checkout');

  try {
    const result = await checkoutCollection.insertMany(cartItems);
    console.log('Checkout data saved successfully:', result);
    res.json({ message: 'Checkout data received and saved successfully!' });
  } catch (error) {
    console.error('Error saving checkout data:', error);
    res.status(500).json({ message: 'Error saving checkout data' });
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
