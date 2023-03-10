import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import express from 'express';
import path from 'path';
const saltRounds = 10;

const prisma = new PrismaClient();

async function main(pass, name, email) {
  await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: pass,
    },
  });
}

const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    }
    main(hash, req.body.email, req.body.name)
      .then(async () => {
        res.send({ message: 'success', hash: hash });
        await prisma.$disconnect();
      })
      .catch(async e => {
        console.log(e);
        await prisma.$disconnect();
        res.send({ message: 'error' });
        //process.exit(1);
      });
  });
});
app.get('/api/help', (req, res) => {
  console.log('help');
  res.json('help api end');
});
if (process.env.NODE_ENV === 'production') {
  console.log(`__dirname = ${__dirname}`);
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.listen(5000, () => console.log('listening on port 5000'));
}

export default app;
