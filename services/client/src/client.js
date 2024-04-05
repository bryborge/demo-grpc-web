const { GreeterClient } = require('../grpc/greeting_grpc_pb.js');
const { HelloRequest } = require('../grpc/greeting_pb.js');

const grpc = require('@grpc/grpc-js');

var client = new GreeterClient('localhost:8080', grpc.credentials.createInsecure());

var request = new HelloRequest();
request.setName('World');

client.sayHello(request, (err, response) => {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log(`Greeting: ${response.getMessage()}`);
  }
});
