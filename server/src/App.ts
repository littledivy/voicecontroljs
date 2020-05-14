import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import ActionRouter from './routes/ActionRoute';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('tiny'));
    this.express.use(bodyParser.json());
    this.express.use(express.static(path.join(__dirname, "../../build")))
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      try {
        res.sendFile(path.join(__dirname, "../../build/index.html"))
      } catch(e) {
        res.send(e)
      }
    });
    this.express.use('/', router);
    this.express.use('/action', ActionRouter);
  }

}

export default new App().express;
