const express = require("express")
const app = express()
const cors = require('cors')
const multer = require('multer')
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./models');

app.use(express.static())
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('OOPs! Something broke');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const filetoStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./uploads`);
  },
  filename: async (req, file, cb) => {
      cb(null, __filename);
    }
  },
);

const upload = multer({ storage: filetoStorageEngine })
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

mongoose.connect('mongodb://localhost:27017/end',{ useNewUrlParser: true, useUnifiedTopology: true })

db = mongoose.connection()

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', function() {
  console.log('Connected to MongoDB database.');
})

app.post('/uploadBlog', upload.single('file'), async (req, res, next) => {
  const { name,price } = req.body
  const imagepath = req.file.path;
  try {
    const newHotel = new Hotels({
      name: name,
      price:price,
      imagepath: imagepath
    })
    await newHotel.save();
    res.status(200).json({ status: 'uploaded' });
  }
  catch (error) {
    console.log(error)
    res.status(500).json('Internal Server Error');
  }
})

app.listen(3000,()=>{
    console.log('Port connected successfully')
})