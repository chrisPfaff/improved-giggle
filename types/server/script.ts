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

app.post('/api', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    }
    main(hash, req.body.email, req.body.name)
      .then(async () => {
        await prisma.$disconnect();
      })
      .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
    res.json(hash);
  });
});
app.get('/api/help', () => {
  console.log('help');
});
if (process.env.NODE_ENV === 'production') {
  console.log(`__dirname = ${__dirname}`);
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.listen(5000, () => console.log('listening on port 5000'));
}

export default app;
