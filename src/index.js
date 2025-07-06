import express from 'express';
import "./Config/PassportConfig.js";
import { PORT } from './Config/ServerConfig.js';
import connectDB from './Config/DBConfig.js';
import ExplainRouter from './Routes/ExplainCodeRouter.js';
import cors from 'cors';
import FindBugRouter from './Routes/FindBugRouter.js';
import ImproveCodeRouter from './Routes/ImproveCodeRouter.js';
import AutoCodeRouter from './Routes/AutoCodeRouter.js';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import AuthRouter from './Routes/AuthRouter.js';
import ChatRouter from './Routes/ChatRouter.js';

const app = express();

app.use(passport.initialize());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/auth', AuthRouter);
app.use('/explain', ExplainRouter);
app.use('/findbug', FindBugRouter);
app.use('/improve', ImproveCodeRouter);
app.use('/autocomplete', AutoCodeRouter);
app.use('/chat', ChatRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});