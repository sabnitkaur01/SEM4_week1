const express = require('express'); // like a php require
const path = require('path');

const server = express();

//set our views directory
server.set("views", path.join(__dirname, 'views'));
// set the statis assetss director so express knows where to look
// for thr files, JS files, images et - anything static
server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res) => {
    console.log('you have hit the home route');
    res.sendFile(path.join(__dirname,'views/index.html'));
})

server.get("/contact", (req, res) => {
    console.log('hit the contact route');
    res.sendFile(path.join(__dirname, 'views/contact.html'));
})

const port = process.env.PORT || 3000; //localhost:3000

server.listen(port, () => {
    console.log(`Server is now running at ${port}/`);
});
