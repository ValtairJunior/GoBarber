import { Router } from 'express';
import User from './app/models/user';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego Fernandes',
    email: 'aba@gnail.com',
    password_hash: '111111',
  });
  return res.json(user);
});

export default routes;
