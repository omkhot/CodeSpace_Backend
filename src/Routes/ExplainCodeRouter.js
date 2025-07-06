import express from 'express';
import ExplainCodeController from '../Controller/ExplainCodeController.js';

const ExplainRouter = express.Router();

ExplainRouter.post('/', ExplainCodeController);

export default ExplainRouter;

