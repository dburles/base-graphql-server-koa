import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { errorHandler, execute } from 'graphql-api-koa';
import schema from './schema';

const app = new Koa();
app
  .use(errorHandler())
  .use(bodyParser())
  .use(execute({ schema }))
  .listen(3010);
