var http = require('http');
var https = require('https');
var socket = require('socket.io');
var fs = require('fs');

var flg = false,recent,body;
// var nn = NodeNinja();
// var port = ()
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  NodeNinja(request, response);
  if (! flg) {
  	  flg = true;
  	  console.log(process.env);
	  http.get({
	  	host:"www.45m.in",
	  	path:"/"},
	  	function(response){
	  		var body = '';
	        response.on('data', function(data) {
	            body += data.toString();
	            
	        });
	        response.on('end', function() {
	        	// console.log(request.url);
	            // recent = JSON.parse(body);
	            // socket.broadcast(recent);  // undefined socket
	            flg = false;
	        });
	        
	  	}
	  );
	  // response.write(body);
	  response.end(process.argv[2]);
  }
  // response.write('');
  // console.log(process);
  // response.end(process.argv[2]);
}).listen(30000);
function NodeNinja(){
	// console.log(arguments);
}