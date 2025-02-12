var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write("Hellow bachho kaise hai app sabhhi aap log thim hi hanoge mai aasha karta hu ki aaplog thik hone am i write or not "); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
