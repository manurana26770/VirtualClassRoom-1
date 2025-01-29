const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT || 5000
require('./db')


// const allowedOrigins = [process.env.FRONTEND_URL]; // Add more origins as need/ed

// app.use(
//     cors({
//         origin: function (origin, callback) {
//             if (!origin || allowedOrigins.includes(origin)) {
//                 callback(null, true);
//             }
//             else {
//                 callback(new Error('Not allowed by CORS'));
//             }
//         },
//         credentials: true
//     })
// )

const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true, // Allow credentials (cookies)
  };
  
  app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(cookieParser({
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 7,
    signed: true
}));




app.use('/auth', require('./routes/authRoutes'))
app.use('/class', require('./routes/classroomRoutes'))


app.get('/', (req, res) => {
    res.send('App running!')
})

app.get('/getuserdata', (req, res) => {
    res.send('Manu Rana , Male')
})

app.listen(port, () => {
    console.log(`VirtualClassroom backend app listening on port ${port}`)
})