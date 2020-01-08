import * as express from 'express';
import {Client} from 'pg'

class App {
  public express;


  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      console.log(req);
      res.json({
        message: 'Hello asdf!'
      })
    });

    router.get('/other', (req, res) => {
      console.log(req);
      res.json({
        message: 'asdf zxcv!'
      })
    });

    this.express.use('/', router);
    this.express.use('/other', router);
  }

}

export default new App().express
