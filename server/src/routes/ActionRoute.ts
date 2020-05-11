import {Router, Request, Response, NextFunction} from 'express';
import axios from 'axios';

export class ActionRoute {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Latest data.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
      res.json({
        status: 'ok'
      })
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const actionRoutes = new ActionRoute();
actionRoutes.init();

export default actionRoutes.router;
