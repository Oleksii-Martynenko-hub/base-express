const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://dev-photodrop-client.vercel.app']
}));
app.use(cookieParser());

app.use(authRoutes);
app.use((req, res, next) => res.status(404).send(['page not found']));

const start = async () => {
  try {
    app.listen(4000, () => console.log(`Server started on ${4000}`));
  } catch (e) {console.log(e);}
}

start();
