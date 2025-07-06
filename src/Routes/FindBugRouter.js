import express from 'express';
import FindTheBugController from '../Controller/FindBugController.js';

const FindBugRouter = express.Router();

FindBugRouter.post('/', FindTheBugController);

export default FindBugRouter;