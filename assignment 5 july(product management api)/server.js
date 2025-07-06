const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


let products = [
  { id: 1, name: "Laptop", price: 49999, category: "Electronics" },
  { id: 2, name: "Phone", price: 9999, category: "Electronics" },
  { id: 3, name: "Shoes", price: 1999, category: "Footwear" }
];


let nextId = 4;


app.get('/products', (req, res) => {
  res.json(products);
});


app.post('/products', (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ error: "Name, price, and category are required." });
  }

  const newProduct = {
    id: nextId++,
    name,
    price: Number(price),
    category
  };

  products.push(newProduct);
  console.log('New Product Added:', newProduct);
  res.status(201).json(newProduct);
});


app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Product not found." });
  }

  Object.assign(product, updatedData);
  console.log(`Product Updated (ID: ${id}):`, updatedData);
  res.json(product);
});


app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found." });
  }

  products.splice(index, 1);
  console.log(`Product Deleted (ID: ${id})`);
  res.json({ message: `Product with ID ${id} deleted.` });
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
