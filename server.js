var express = require('express');
 
var app = express.createServer();
app.configure(function(){
  app.use(express.static(__dirname + '/views'));
});
app.get('/', function(req, res, next){
  res.render('./views/index.html');
});
app.listen(8080);

// var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
//     ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
//     mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
//     mongoURLLabel = "";

//  if (process.env.DATABASE_SERVICE_NAME) {
    // var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase();
    // mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'];
    // mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'];
    // mongoDatabase = process.env[mongoServiceName + '_DATABASE'];
    // mongoPassword = process.env[mongoServiceName + '_PASSWORD'];
    // mongoUser = process.env[mongoServiceName + '_USER'];

console.log('Server running on port 8080');
