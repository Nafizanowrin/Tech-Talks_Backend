require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
// const router = require("./router/auth-router");
const connectDb = require("./utils/db");
// const errorMiddleware = require("./middlewares/error-middleware");
const newsRoutes = require('./router/newsRouter');

//let's tackle cors
const corsOptions = {
    origin: "https://tech-talks2316.netlify.app",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(express.static('dist'));

app.use(cors(corsOptions));
app.use(express.json());

// Mount the Router: to use the router in your main Express app, you can "mount" it at a specific URL prefix
// app.use("/api/auth", router);


app.use("/api/auth", authRoute);

app.use('/api/news', newsRoutes);



const PORT = 5000;
connectDb().then(() => {
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

});
