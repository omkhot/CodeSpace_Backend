import express from 'express';
import { AutoCompleteCodeController } from '../Controller/AutoCompleteCodeController.js';
const AutoCodeRouter = express.Router();

AutoCodeRouter.post('/', AutoCompleteCodeController);

export default AutoCodeRouter;