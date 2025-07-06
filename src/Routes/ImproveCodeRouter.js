import express from 'express';
import ImproveCodeController from '../Controller/ImproveCodeController.js';

const ImproveCodeRouter = express.Router();

ImproveCodeRouter.post('/', ImproveCodeController);

export default ImproveCodeRouter;