import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

// "Globals"
const PROTO_PATH = path.join(__dirname, '../../../proto', 'greeting.proto');
const SERVER_URI = '0.0.0.0:9090';

// Protobufs
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor   = grpc.loadPackageDefinition(packageDefinition).greeting as any;

// Handlers
const sayHello = (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
  callback(null, { message: 'Hello, ' + call.request.name });
};

// Server entry point
const main = () => {
  const server = new grpc.Server();

  server.addService(protoDescriptor.Greeter.service, { sayHello });
  server.bindAsync(SERVER_URI, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Server running at http://${SERVER_URI}`);
  });
};

main();
