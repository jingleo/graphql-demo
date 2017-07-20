//server.js
var express = require('express')
var schema = require('./schema')

var Graphql = require('graphql')
var bodyParser = require('body-parser')

let app = express();
let PORT = 3000;

//Parse post content as text
app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) => {
  //GraphQL executor
  Graphql.graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
});

let server = app.listen(PORT, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
