const express = require('express');
const path = require('path');

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-app/'}),
);

// Start the app by listening on the default Heroku port


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });