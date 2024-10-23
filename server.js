const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("math.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const mathPackage = grpcObject.math;

// Implement the Add service
function addNumbers(call, callback) {
    const num1 = call.request.num1;
    const num2 = call.request.num2;
    const sum = num1 + num2;
    callback(null, { sum: sum });
}

// Set up the server
const server = new grpc.Server();
server.addService(mathPackage.Math.service, { Add: addNumbers });
server.bindAsync("localhost:3001", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server running on port ${port}`);
    server.start();
});
