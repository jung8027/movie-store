const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const path = require('path');
const rootPath = path.join(__dirname, '.')
// const bodyParser = require('body-parser');
// const routers = require('./routers');


// app.use(bodyParser.urlencoded({ extended: true }));


//Serving up bundle.js file
app.use(express.static(`${rootPath}/build`))

app.get('*', function(request, response) {
	//console.log(request)
	console.log(path.join(__dirname, '/build/index.html')	)
  response.sendFile(`${rootPath}/build/index.html`);
});

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Listening on port: ', port)
})