// import { GreeterClient } from '../grpc/greeting_grpc_web_pb';
// import { HelloRequest, HelloReply } from '../grpc/greeting_pb';
// import * as grpcWeb from 'grpc-web';

// const client = new GreeterClient('http://localhost:8080', null, null);

// const request = new HelloRequest();
// request.setName('World');

// client.sayHello(request, {}, (err: grpcWeb.Error, response: HelloReply) => {
//   if (err) {
//     console.error(`Error: ${err.code}, ${err.message}`);
//   } else {
//     console.log('Greeting:', response.getMessage());
//   }
// });
