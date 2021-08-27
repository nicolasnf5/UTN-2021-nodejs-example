import express from 'express';
import CommonRoutes from './http/routes/common.routes';
import cors from 'cors';
import UserRoutes from './http/routes/user.routes';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';

const app: express.Application = express();

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));

const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

routes.push(new UserRoutes(app));

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});