const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();

// Init middleware
app.use(logger);

// // Get all members
// app.get('/api/members', (req, res) => {
//     res.json(members);
// });

// // Get single member
// app.get('/api/members/:id', (req, res) => {
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if (found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id)));
//     } else {
//         res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//     }
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Handlebars middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members
    });
});

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));